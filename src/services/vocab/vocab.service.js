import { referenceArt } from './helpers';

const ARTWORK = {
  'central_umbo.png': require('../../../assets/vocab/artwork/central_umbo.png'),
  'fascicle.png': require('../../../assets/vocab/artwork/fascicle.png'),
  'keeled_scale.png': require('../../../assets/vocab/artwork/keeled_scale.png'),
  'not_raised_scale.png': require('../../../assets/vocab/artwork/not_raised_scale.png'),
  'not_thickened_scale.png': require('../../../assets/vocab/artwork/not_thickened_scale.png'),
  'prickle_umbo.png': require('../../../assets/vocab/artwork/prickle_umbo.png'),
  'pyramidal_umbo.png': require('../../../assets/vocab/artwork/pyramidal_umbo.png'),
  'raised_scale.png': require('../../../assets/vocab/artwork/raised_scale.png'),
  'terminal_umbo.png': require('../../../assets/vocab/artwork/terminal_umbo.png'),
  'thickened_scale.png': require('../../../assets/vocab/artwork/thickened_scale.png'),
  'tree_height.png': require('../../../assets/vocab/artwork/tree_height.png'),
  'tree_width.png': require('../../../assets/vocab/artwork/tree_width.png'),
};

export function LoadSchema(path) {
  return {
    trees: referenceArt(require('../../../assets/vocab/data/trees/schema.json'), ARTWORK),
    aceraceae: referenceArt(
      require('../../../assets/vocab/data/trees/aceraceae/schema.json'),
      ARTWORK
    ),
    acer: referenceArt(
      require('../../../assets/vocab/data/trees/aceraceae/acer/schema.json'),
      ARTWORK
    ),
    anacardiaceae: referenceArt(
      require('../../../assets/vocab/data/trees/anacardiaceae/schema.json'),
      ARTWORK
    ),
    rhus: referenceArt(
      require('../../../assets/vocab/data/trees/anacardiaceae/rhus/schema.json'),
      ARTWORK
    ),
    toxiocodendron: referenceArt(
      require('../../../assets/vocab/data/trees/anacardiaceae/toxiocodendron/schema.json'),
      ARTWORK
    ),
    aquifoliaceae: referenceArt(
      require('../../../assets/vocab/data/trees/aquifoliaceae/schema.json'),
      ARTWORK
    ),
    ilex: referenceArt(
      require('../../../assets/vocab/data/trees/aquifoliaceae/ilex/schema.json'),
      ARTWORK
    ),
    betulaceae: referenceArt(
      require('../../../assets/vocab/data/trees/betulaceae/schema.json'),
      ARTWORK
    ),
    betula: referenceArt(
      require('../../../assets/vocab/data/trees/betulaceae/betula/schema.json'),
      ARTWORK
    ),
    carpinus: referenceArt(
      require('../../../assets/vocab/data/trees/betulaceae/carpinus/schema.json'),
      ARTWORK
    ),
    ostrya: referenceArt(
      require('../../../assets/vocab/data/trees/betulaceae/ostrya/schema.json'),
      ARTWORK
    ),
    caprifoliaceae: referenceArt(
      require('../../../assets/vocab/data/trees/caprifoliaceae/schema.json'),
      ARTWORK
    ),
    sambucus: referenceArt(
      require('../../../assets/vocab/data/trees/caprifoliaceae/sambucus/schema.json'),
      ARTWORK
    ),
    viburnum: referenceArt(
      require('../../../assets/vocab/data/trees/caprifoliaceae/viburnum/schema.json'),
      ARTWORK
    ),
    cornaceae: referenceArt(
      require('../../../assets/vocab/data/trees/cornaceae/schema.json'),
      ARTWORK
    ),
    cornus: referenceArt(
      require('../../../assets/vocab/data/trees/cornaceae/cornus/schema.json'),
      ARTWORK
    ),
    nyssa: referenceArt(
      require('../../../assets/vocab/data/trees/cornaceae/nyssa/schema.json'),
      ARTWORK
    ),
    cupressaceae: referenceArt(
      require('../../../assets/vocab/data/trees/cupressaceae/schema.json'),
      ARTWORK
    ),
    chamaecyparis: referenceArt(
      require('../../../assets/vocab/data/trees/cupressaceae/chamaecyparis/schema.json'),
      ARTWORK
    ),
    juniperus: referenceArt(
      require('../../../assets/vocab/data/trees/cupressaceae/juniperus/schema.json'),
      ARTWORK
    ),
    thuja: referenceArt(
      require('../../../assets/vocab/data/trees/cupressaceae/thuja/schema.json'),
      ARTWORK
    ),
    ebenaceae: referenceArt(
      require('../../../assets/vocab/data/trees/ebenaceae/schema.json'),
      ARTWORK
    ),
    diospyros: referenceArt(
      require('../../../assets/vocab/data/trees/ebenaceae/diospyros/schema.json'),
      ARTWORK
    ),
    ericaceae: referenceArt(
      require('../../../assets/vocab/data/trees/ericaceae/schema.json'),
      ARTWORK
    ),
    kalmia: referenceArt(
      require('../../../assets/vocab/data/trees/ericaceae/kalmia/schema.json'),
      ARTWORK
    ),
    rhododendron: referenceArt(
      require('../../../assets/vocab/data/trees/ericaceae/rhododendron/schema.json'),
      ARTWORK
    ),
    fagaceae: referenceArt(
      require('../../../assets/vocab/data/trees/fagaceae/schema.json'),
      ARTWORK
    ),
    castanea: referenceArt(
      require('../../../assets/vocab/data/trees/fagaceae/castanea/schema.json'),
      ARTWORK
    ),
    fagus: referenceArt(
      require('../../../assets/vocab/data/trees/fagaceae/fagus/schema.json'),
      ARTWORK
    ),
    quercus: referenceArt(
      require('../../../assets/vocab/data/trees/fagaceae/quercus/schema.json'),
      ARTWORK
    ),
    hamamelidaceae: referenceArt(
      require('../../../assets/vocab/data/trees/hamamelidaceae/schema.json'),
      ARTWORK
    ),
    hamamelis: referenceArt(
      require('../../../assets/vocab/data/trees/hamamelidaceae/hamamelis/schema.json'),
      ARTWORK
    ),
    liquidambar: referenceArt(
      require('../../../assets/vocab/data/trees/hamamelidaceae/liquidambar/schema.json'),
      ARTWORK
    ),
    juglandaceae: referenceArt(
      require('../../../assets/vocab/data/trees/juglandaceae/schema.json'),
      ARTWORK
    ),
    carya: referenceArt(
      require('../../../assets/vocab/data/trees/juglandaceae/carya/schema.json'),
      ARTWORK
    ),
    juglans: referenceArt(
      require('../../../assets/vocab/data/trees/juglandaceae/juglans/schema.json'),
      ARTWORK
    ),
    lauraceae: referenceArt(
      require('../../../assets/vocab/data/trees/lauraceae/schema.json'),
      ARTWORK
    ),
    sassafras: referenceArt(
      require('../../../assets/vocab/data/trees/lauraceae/sassafras/schema.json'),
      ARTWORK
    ),
    magnoliaceae: referenceArt(
      require('../../../assets/vocab/data/trees/magnoliaceae/schema.json'),
      ARTWORK
    ),
    liriodendron: referenceArt(
      require('../../../assets/vocab/data/trees/magnoliaceae/liriodendron/schema.json'),
      ARTWORK
    ),
    magnolia: referenceArt(
      require('../../../assets/vocab/data/trees/magnoliaceae/magnolia/schema.json'),
      ARTWORK
    ),
    moraceae: referenceArt(
      require('../../../assets/vocab/data/trees/moraceae/schema.json'),
      ARTWORK
    ),
    morus: referenceArt(
      require('../../../assets/vocab/data/trees/moraceae/morus/schema.json'),
      ARTWORK
    ),
    oleaceae: referenceArt(
      require('../../../assets/vocab/data/trees/oleaceae/schema.json'),
      ARTWORK
    ),
    fraxinus: referenceArt(
      require('../../../assets/vocab/data/trees/oleaceae/fraxinus/schema.json'),
      ARTWORK
    ),
    pinaceae: referenceArt(
      require('../../../assets/vocab/data/trees/pinaceae/schema.json'),
      ARTWORK
    ),
    abies: referenceArt(
      require('../../../assets/vocab/data/trees/pinaceae/abies/schema.json'),
      ARTWORK
    ),
    larix: referenceArt(
      require('../../../assets/vocab/data/trees/pinaceae/larix/schema.json'),
      ARTWORK
    ),
    picea: referenceArt(
      require('../../../assets/vocab/data/trees/pinaceae/picea/schema.json'),
      ARTWORK
    ),
    pinus: referenceArt(
      require('../../../assets/vocab/data/trees/pinaceae/pinus/schema.json'),
      ARTWORK
    ),
    tsuga: referenceArt(
      require('../../../assets/vocab/data/trees/pinaceae/tsuga/schema.json'),
      ARTWORK
    ),
    platanaceae: referenceArt(
      require('../../../assets/vocab/data/trees/platanaceae/schema.json'),
      ARTWORK
    ),
    platanus: referenceArt(
      require('../../../assets/vocab/data/trees/platanaceae/platanus/schema.json'),
      ARTWORK
    ),
    rosaceae: referenceArt(
      require('../../../assets/vocab/data/trees/rosaceae/schema.json'),
      ARTWORK
    ),
    amelanchier: referenceArt(
      require('../../../assets/vocab/data/trees/rosaceae/amelanchier/schema.json'),
      ARTWORK
    ),
    prunus: referenceArt(
      require('../../../assets/vocab/data/trees/rosaceae/prunus/schema.json'),
      ARTWORK
    ),
    sorbus: referenceArt(
      require('../../../assets/vocab/data/trees/rosaceae/sorbus/schema.json'),
      ARTWORK
    ),
    rubiaceae: referenceArt(
      require('../../../assets/vocab/data/trees/rubiaceae/schema.json'),
      ARTWORK
    ),
    cephalanthus: referenceArt(
      require('../../../assets/vocab/data/trees/rubiaceae/cephalanthus/schema.json'),
      ARTWORK
    ),
    rutaceae: referenceArt(
      require('../../../assets/vocab/data/trees/rutaceae/schema.json'),
      ARTWORK
    ),
    zanthoxylum: referenceArt(
      require('../../../assets/vocab/data/trees/rutaceae/zanthoxylum/schema.json'),
      ARTWORK
    ),
    salicaceae: referenceArt(
      require('../../../assets/vocab/data/trees/salicaceae/schema.json'),
      ARTWORK
    ),
    populus: referenceArt(
      require('../../../assets/vocab/data/trees/salicaceae/populus/schema.json'),
      ARTWORK
    ),
    salix: referenceArt(
      require('../../../assets/vocab/data/trees/salicaceae/salix/schema.json'),
      ARTWORK
    ),
    staphyleaceae: referenceArt(
      require('../../../assets/vocab/data/trees/staphyleaceae/schema.json'),
      ARTWORK
    ),
    staphylea: referenceArt(
      require('../../../assets/vocab/data/trees/staphyleaceae/staphylea/schema.json'),
      ARTWORK
    ),
    tiliaceae: referenceArt(
      require('../../../assets/vocab/data/trees/tiliaceae/schema.json'),
      ARTWORK
    ),
    tilia: referenceArt(
      require('../../../assets/vocab/data/trees/tiliaceae/tilia/schema.json'),
      ARTWORK
    ),
    ulmaceae: referenceArt(
      require('../../../assets/vocab/data/trees/ulmaceae/schema.json'),
      ARTWORK
    ),
    celtis: referenceArt(
      require('../../../assets/vocab/data/trees/ulmaceae/celtis/schema.json'),
      ARTWORK
    ),
    ulmus: referenceArt(
      require('../../../assets/vocab/data/trees/ulmaceae/ulmus/schema.json'),
      ARTWORK
    ),
  }[path];
}

export function LoadTaxa(path) {
  return {
    trees: require('../../../assets/vocab/data/trees/members.json'),
    aceraceae: require('../../../assets/vocab/data/trees/aceraceae/members.json'),
    acer: require('../../../assets/vocab/data/trees/aceraceae/acer/members.json'),
    anacardiaceae: require('../../../assets/vocab/data/trees/anacardiaceae/members.json'),
    rhus: require('../../../assets/vocab/data/trees/anacardiaceae/rhus/members.json'),
    toxiocodendron: require('../../../assets/vocab/data/trees/anacardiaceae/toxiocodendron/members.json'),
    aquifoliaceae: require('../../../assets/vocab/data/trees/aquifoliaceae/members.json'),
    ilex: require('../../../assets/vocab/data/trees/aquifoliaceae/ilex/members.json'),
    betulaceae: require('../../../assets/vocab/data/trees/betulaceae/members.json'),
    betula: require('../../../assets/vocab/data/trees/betulaceae/betula/members.json'),
    carpinus: require('../../../assets/vocab/data/trees/betulaceae/carpinus/members.json'),
    ostrya: require('../../../assets/vocab/data/trees/betulaceae/ostrya/members.json'),
    caprifoliaceae: require('../../../assets/vocab/data/trees/caprifoliaceae/members.json'),
    sambucus: require('../../../assets/vocab/data/trees/caprifoliaceae/sambucus/members.json'),
    viburnum: require('../../../assets/vocab/data/trees/caprifoliaceae/viburnum/members.json'),
    cornaceae: require('../../../assets/vocab/data/trees/cornaceae/members.json'),
    cornus: require('../../../assets/vocab/data/trees/cornaceae/cornus/members.json'),
    nyssa: require('../../../assets/vocab/data/trees/cornaceae/nyssa/members.json'),
    cupressaceae: require('../../../assets/vocab/data/trees/cupressaceae/members.json'),
    chamaecyparis: require('../../../assets/vocab/data/trees/cupressaceae/chamaecyparis/members.json'),
    juniperus: require('../../../assets/vocab/data/trees/cupressaceae/juniperus/members.json'),
    thuja: require('../../../assets/vocab/data/trees/cupressaceae/thuja/members.json'),
    ebenaceae: require('../../../assets/vocab/data/trees/ebenaceae/members.json'),
    diospyros: require('../../../assets/vocab/data/trees/ebenaceae/diospyros/members.json'),
    ericaceae: require('../../../assets/vocab/data/trees/ericaceae/members.json'),
    kalmia: require('../../../assets/vocab/data/trees/ericaceae/kalmia/members.json'),
    rhododendron: require('../../../assets/vocab/data/trees/ericaceae/rhododendron/members.json'),
    fagaceae: require('../../../assets/vocab/data/trees/fagaceae/members.json'),
    castanea: require('../../../assets/vocab/data/trees/fagaceae/castanea/members.json'),
    fagus: require('../../../assets/vocab/data/trees/fagaceae/fagus/members.json'),
    quercus: require('../../../assets/vocab/data/trees/fagaceae/quercus/members.json'),
    hamamelidaceae: require('../../../assets/vocab/data/trees/hamamelidaceae/members.json'),
    hamamelis: require('../../../assets/vocab/data/trees/hamamelidaceae/hamamelis/members.json'),
    liquidambar: require('../../../assets/vocab/data/trees/hamamelidaceae/liquidambar/members.json'),
    juglandaceae: require('../../../assets/vocab/data/trees/juglandaceae/members.json'),
    carya: require('../../../assets/vocab/data/trees/juglandaceae/carya/members.json'),
    juglans: require('../../../assets/vocab/data/trees/juglandaceae/juglans/members.json'),
    lauraceae: require('../../../assets/vocab/data/trees/lauraceae/members.json'),
    sassafras: require('../../../assets/vocab/data/trees/lauraceae/sassafras/members.json'),
    magnoliaceae: require('../../../assets/vocab/data/trees/magnoliaceae/members.json'),
    liriodendron: require('../../../assets/vocab/data/trees/magnoliaceae/liriodendron/members.json'),
    magnolia: require('../../../assets/vocab/data/trees/magnoliaceae/magnolia/members.json'),
    moraceae: require('../../../assets/vocab/data/trees/moraceae/members.json'),
    morus: require('../../../assets/vocab/data/trees/moraceae/morus/members.json'),
    oleaceae: require('../../../assets/vocab/data/trees/oleaceae/members.json'),
    fraxinus: require('../../../assets/vocab/data/trees/oleaceae/fraxinus/members.json'),
    pinaceae: require('../../../assets/vocab/data/trees/pinaceae/members.json'),
    abies: require('../../../assets/vocab/data/trees/pinaceae/abies/members.json'),
    larix: require('../../../assets/vocab/data/trees/pinaceae/larix/members.json'),
    picea: require('../../../assets/vocab/data/trees/pinaceae/picea/members.json'),
    pinus: require('../../../assets/vocab/data/trees/pinaceae/pinus/members.json'),
    tsuga: require('../../../assets/vocab/data/trees/pinaceae/tsuga/members.json'),
    platanaceae: require('../../../assets/vocab/data/trees/platanaceae/members.json'),
    platanus: require('../../../assets/vocab/data/trees/platanaceae/platanus/members.json'),
    rosaceae: require('../../../assets/vocab/data/trees/rosaceae/members.json'),
    amelanchier: require('../../../assets/vocab/data/trees/rosaceae/amelanchier/members.json'),
    prunus: require('../../../assets/vocab/data/trees/rosaceae/prunus/members.json'),
    sorbus: require('../../../assets/vocab/data/trees/rosaceae/sorbus/members.json'),
    rubiaceae: require('../../../assets/vocab/data/trees/rubiaceae/members.json'),
    cephalanthus: require('../../../assets/vocab/data/trees/rubiaceae/cephalanthus/members.json'),
    rutaceae: require('../../../assets/vocab/data/trees/rutaceae/members.json'),
    zanthoxylum: require('../../../assets/vocab/data/trees/rutaceae/zanthoxylum/members.json'),
    salicaceae: require('../../../assets/vocab/data/trees/salicaceae/members.json'),
    populus: require('../../../assets/vocab/data/trees/salicaceae/populus/members.json'),
    salix: require('../../../assets/vocab/data/trees/salicaceae/salix/members.json'),
    staphyleaceae: require('../../../assets/vocab/data/trees/staphyleaceae/members.json'),
    staphylea: require('../../../assets/vocab/data/trees/staphyleaceae/staphylea/members.json'),
    tiliaceae: require('../../../assets/vocab/data/trees/tiliaceae/members.json'),
    tilia: require('../../../assets/vocab/data/trees/tiliaceae/tilia/members.json'),
    ulmaceae: require('../../../assets/vocab/data/trees/ulmaceae/members.json'),
    celtis: require('../../../assets/vocab/data/trees/ulmaceae/celtis/members.json'),
    ulmus: require('../../../assets/vocab/data/trees/ulmaceae/ulmus/members.json'),
  }[path];
}

export function BuildTree(name, common_name, link) {
  var links = {
    name,
    common_name,
    link,
    members: [],
  };
  const members = LoadTaxa(link);
  if (members) {
    for (let i in members) {
      var { name, common_name, link } = members[i];
      if (link) {
        links.members.push(BuildTree(name, common_name, link));
      }
    }
  }
  return links;
}
