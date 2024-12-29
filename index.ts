function FindDuplicates<T>(array: T[]): { key: T; count: number; idxDup: number[] }[] {
    const duplicates: Record<string, { count: number; idxDup: number[] }> = {};
  
    // Iterar y contar ocurrencias
    array.forEach((value, index) => {
        const key = JSON.stringify(value); // Usar JSON.stringify para valores complejos
        if (!duplicates[key]) {
            duplicates[key] = { count: 0, idxDup: [] };
        }
        duplicates[key].count++;
        duplicates[key].idxDup.push(index);
    });
  
    // Filtrar solo duplicados y reconstruir objetos con las llaves originales
    return Object.entries(duplicates)
        .filter(([_, data]) => data.count > 1)
        .map(([key, data]) => ({
            key: JSON.parse(key) as T,
            count: data.count,
            idxDup: data.idxDup
        }));
  }
  
  export default FindDuplicates;