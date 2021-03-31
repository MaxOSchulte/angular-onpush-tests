import { Config } from './controls/controls.component';

export interface TestConfig {
  children: TestConfig[];
  boundValue: any;
  boundObject: object;
  highlight: boolean;
}


export const generateChildren = (cnt: number, highlight: boolean) => {
  return new Array(cnt).fill(0).map(() => generateEmptyChild(highlight));
};

export const generateLevel = (children: number, siblings: number, highlight: boolean, sublevel: number): TestConfig => {
  return {
    boundValue: 1,
    boundObject: {a: 'foo', b: 'bar'},
    highlight,
    children: sublevel > 0 ? new Array(siblings).fill(0).map(() => generateLevel(children, siblings, highlight, sublevel -1)) : generateChildren(children, highlight),
  };
};

export function buildConfig(config: Config): TestConfig[] {
  return new Array(config.siblings).fill(0).map(() => generateLevel(config.childPerLevel, config.siblings, config.highlight, config.levels -1));
}

export function generateEmptyChild(highlight: boolean): TestConfig {
  return {boundValue: 1, boundObject: {a: 'foo', b: 'bar'}, highlight, children: []};
}
