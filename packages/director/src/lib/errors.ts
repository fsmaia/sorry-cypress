export class AppError extends Error {
  code: string;
  constructor(code: string) {
    super('AppError');
    this.code = code;
  }
}

export const UNKNOWN_HOOK_TYPE = 'UNKNOWN_HOOK_TYPE';
export const INSTANCE_EXISTS = 'INSTANCE_EXISTS';
export const INSTANCE_NOT_EXIST = 'INSTANCE_NOT_EXIST';
export const INSTANCE_NO_CREATE_TEST_DTO = 'INSTANCE_NO_CREATE_TEST_DTO';
export const INSTANCE_RESULTS_UPDATE_FAILED = 'INSTANCE_RESULTS_UPDATE_FAILED';
export const INSTANCE_SET_TESTS_FAILED = 'INSTANCE_SET_TESTS_FAILED';

export const RUN_EXISTS = 'RUN_EXISTS';
export const RUN_NOT_EXIST = 'RUN_NOT_EXISTS';
export const PROJECT_CREATE_FAILED = 'PROJECT_CREATE_FAILED';

export const CLAIM_FAILED = 'CLAIM_FAILED';
export const SCREENSHOT_URL_UPDATE_FAILED = 'SCREENSHOT_URL_UPDATE_FAILED';
export const VIDEO_URL_UPDATE_FAILED = 'VIDEO_URL_UPDATE_FAILED';
