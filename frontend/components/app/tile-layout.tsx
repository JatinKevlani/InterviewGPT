import React, { useMemo } from 'react';
import { Track } from 'livekit-client';
import { AnimatePresence, motion, useSpring } from 'motion/react';
import {
  BarVisualizer,
  type TrackReference,
  VideoTrack,
  useLocalParticipant,
  useTracks,
  useVoiceAssistant,
} from '@livekit/components-react';
import { cn } from '@/lib/utils';

const MotionContainer = motion.create('div');

const classNames = {
  grid: [
    'h-full w-full',
    'grid gap-x-2 place-content-center',
    'grid-cols-[1fr_1fr] grid-rows-[90px_1fr_90px]',
  ],
  agentChatOpenWithSecondTile: ['col-start-1 row-start-1', 'self-center justify-self-end'],
  agentChatOpenWithoutSecondTile: ['col-start-1 row-start-1', 'col-span-2', 'place-content-center'],
  agentChatClosed: ['col-start-1 row-start-1', 'col-span-2 row-span-3', 'place-content-center'],
  secondTileChatOpen: ['col-start-2 row-start-1', 'self-center justify-self-start'],
  secondTileChatClosed: ['col-start-2 row-start-3', 'place-content-end'],
};

export function useLocalTrackRef(source: Track.Source) {
  const { localParticipant } = useLocalParticipant();
  const publication = localParticipant.getTrackPublication(source);

  return useMemo(
    () => (publication ? { source, participant: localParticipant, publication } : undefined),
    [source, publication, localParticipant]
  );
}

interface TileLayoutProps {
  chatOpen: boolean;
}

export function TileLayout({ chatOpen }: TileLayoutProps) {
  const { state: agentState, audioTrack, videoTrack } = useVoiceAssistant();
  const [screenShareTrack] = useTracks([Track.Source.ScreenShare]);
  const cameraTrack = useLocalTrackRef(Track.Source.Camera);

  const isCameraEnabled = cameraTrack && !cameraTrack.publication.isMuted;
  const isScreenShareEnabled = screenShareTrack && !screenShareTrack.publication.isMuted;
  const hasSecondTile = isCameraEnabled || isScreenShareEnabled;

  // ✅ Motion One springs
  const scaleSpring = useSpring(chatOpen ? 1 : 5, {
    stiffness: 600,
    damping: 60,
  });

  const opacitySpring = useSpring(1, {
    stiffness: 200,
    damping: 30,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-8 bottom-32 z-50 md:top-12 md:bottom-40">
      <div className="relative mx-auto h-full max-w-2xl px-4 md:px-0">
        <div className={cn(classNames.grid)}>
          {/* AGENT TILE */}
          <div
            className={cn(
              'grid',
              !chatOpen && classNames.agentChatClosed,
              chatOpen && hasSecondTile && classNames.agentChatOpenWithSecondTile,
              chatOpen && !hasSecondTile && classNames.agentChatOpenWithoutSecondTile
            )}
          >
            <AnimatePresence>
              {!videoTrack && (
                <MotionContainer
                  key="agent"
                  layoutId="agent"
                  initial={{ opacity: 0, scale: 0 }}
                  style={{
                    opacity: opacitySpring,
                    scale: scaleSpring,
                  }}
                  className="bg-background aspect-square h-[90px] rounded-md border border-transparent"
                >
                  <BarVisualizer
                    barCount={5}
                    state={agentState}
                    options={{ minHeight: 5 }}
                    trackRef={audioTrack}
                    className="flex h-full items-center justify-center gap-1"
                  />
                </MotionContainer>
              )}

              {videoTrack && (
                <MotionContainer
                  key="avatar"
                  layoutId="avatar"
                  initial={{ opacity: 1, scale: 1 }}
                  style={{
                    scale: scaleSpring,
                    filter: 'blur(0px)',
                  }}
                  className="overflow-hidden bg-black rounded-md"
                >
                  <VideoTrack
                    width={videoTrack.publication.dimensions?.width ?? 0}
                    height={videoTrack.publication.dimensions?.height ?? 0}
                    trackRef={videoTrack}
                    className={cn(chatOpen && 'size-[90px] object-cover')}
                  />
                </MotionContainer>
              )}
            </AnimatePresence>
          </div>

          {/* CAMERA / SCREEN SHARE */}
          <div
            className={cn(
              'grid',
              chatOpen && classNames.secondTileChatOpen,
              !chatOpen && classNames.secondTileChatClosed
            )}
          >
            <AnimatePresence>
              {(cameraTrack || screenShareTrack) && (
                <MotionContainer
                  key="camera"
                  layout="position"
                  initial={{ opacity: 0, scale: 0 }}
                  style={{
                    opacity: opacitySpring,
                    scale: scaleSpring,
                  }}
                  className="drop-shadow-lg"
                >
                  <VideoTrack
                    trackRef={cameraTrack || screenShareTrack}
                    width={(cameraTrack || screenShareTrack)?.publication.dimensions?.width ?? 0}
                    height={(cameraTrack || screenShareTrack)?.publication.dimensions?.height ?? 0}
                    className="bg-muted aspect-square w-[90px] rounded-md object-cover"
                  />
                </MotionContainer>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
