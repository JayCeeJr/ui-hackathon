/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Step = {
  id?: number;
  build_id?: number;
  repo_id?: number;
  number?: number;
  name?: string;
  image?: string;
  stage?: string;
  status?: string;
  error?: string;
  exit_code?: number;
  created?: number;
  started?: number;
  finished?: number;
  host?: string;
  runtime?: string;
  distribution?: string;
};
