export const pinalesSchema = {
  name: {
    kind: 'meta',
  },
  common_name: {
    kind: 'meta',
  },
  link: {
    kind: 'meta',
  },
  leaves: {
    kind: 'object',
    members: {
      needle: {
        kind: 'categorical',
        values: ['needles', 'broadleaves'],
        default: 'needles',
        prompt: 'Are the leaves',
      },
    },
  },
  cone: {
    kind: 'categorical',
    values: ['spiral scaled', 'red fruit', 'other'],
    default: 'spiral scaled',
    prompt: 'Are the cones',
  },
};

export const pinalesMembers = [
  {
    name: 'Araucariaceae',
    common_name: 'araucaria',
    link: 'araucariaceae',
    leaves: {
      needle: 'broadleaves',
    },
  },
  {
    name: 'Cupressaceae',
    common_name: 'cypress family',
    link: 'cupressaceae',
    cone: 'other',
    leaves: {},
  },
  {
    name: 'Pinaceae',
    common_name: 'pine family',
    link: 'pinaceae',
    leaves: {},
  },
  {
    name: 'Taxaceae',
    common_name: 'yew',
    link: 'taxaceae',
    cone: 'red fruit',
    leaves: {},
  },
];
