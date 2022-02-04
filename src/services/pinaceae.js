export const pinaceaeSchema = {
  name: {
    kind: 'meta',
  },
  common_name: {
    kind: 'meta',
  },
  needle: {
    kind: 'object',
    members: {
      rollability: {
        kind: 'categorical',
        values: ['rollable', 'not rollable'],
        default: 'rollable',
        prompt: 'Are the needles',
      },
    },
  },
  cone: {
    kind: 'object',
    members: {
      flexibility: {
        kind: 'categorical',
        values: ['flexible', 'brittle'],
        default: 'brittle',
        prompt: 'Are the needles',
      },
    },
  },
};

export const pinaceaeMembers = [
  {
    name: 'Pinus',
    common_name: 'pine',
    link: 'pinus',
    cone: {},
    needle: {},
  },
  {
    name: 'Abies',
    common_name: 'fir',
    link: 'abies',
    cone: {},
    needle: {
      rollability: 'not rollable',
    },
  },
  {
    name: 'Picea',
    common_name: 'spruce',
    link: 'picea',
    cone: {
      flexibility: 'flexible',
    },
    needle: {},
  },
];
