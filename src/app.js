
 const pronombres = ['el', 'nuestro', 'aquel', 'tu'];
 const adjetivos = ['gran', 'pequeño','simple', 'alegre'];
 const sustantivos = ['juego', 'gato', 'coche', 'piano'];

 const proAdjSus = [...pronombres.map(pronombre =>
      adjetivos.map(adjetivo =>
          sustantivos.map(sustantivo =>
              `${pronombre}${adjetivo}${sustantivo}.com`
          )
      )
  ).flat()];
console.log(proAdjSus)
