import { useLandingNavigation } from './useLandingNavigation.js';
import { useLandingState } from './useLandingState.js';
import { useCardTilt } from './useCardTilt.js';

export function useLandingInteractions() {
  useLandingNavigation();
  useLandingState();
  useCardTilt();
}
