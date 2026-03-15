

export const IMAGE_PATHS = {
  // Profile images
  profile: '/images/profile.webp',

  // Project images
  projects: {
    nextstep: '/images/projects/nextstep.webp',
    covidTracker: '/images/projects/ct.webp',
    informationKiosk: '/images/projects/kiosk_crop.webp',
    calculator: '/images/projects/calculator.webp',
    verilogQuizzer: '/images/projects/Verilog_Quizzer.webp',
    flashlight: '/images/projects/flashlight.webp',
    deviceinfo: '/images/projects/deviceinfo.webp',
    cqaExpertRouting: '/images/projects/cqa_expertrouting.webp',
  },
} as const;

/**
 * Get image path by identifier
 * Usage: getImagePath('profile') or getImagePath('projects.nextstep')
 */
export function getImagePath(identifier: string): string {
  const keys = identifier.split('.');
  let result: any = IMAGE_PATHS;

  for (const key of keys) {
    if (result && key in result) {
      result = result[key];
    } else {
      console.warn(`Image path not found for identifier: ${identifier}`);
      return '';
    }
  }

  return result as string;
}
