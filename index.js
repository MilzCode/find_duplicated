function findDuplicates(array) {
  const duplicates = {};
  
  // Iterar y contar ocurrencias
  array.forEach((value, index) => {
      if (!duplicates[value]) {
          duplicates[value] = { count: 0, idxDup: [] };
      }
      duplicates[value].count++;
      duplicates[value].idxDup.push(index);
  });

  // Filtrar solo duplicados
  return Object.entries(duplicates)
      .filter(([_, data]) => data.count > 1)
      .map(([key, data]) => ({
          key,
          count: data.count,
          idxDup: data.idxDup
      }));
}

// Ejemplo de uso
const array = [1, 2, 3, 2, 4, 5, 3, 3];
const result = findDuplicates(array);
console.log(result);