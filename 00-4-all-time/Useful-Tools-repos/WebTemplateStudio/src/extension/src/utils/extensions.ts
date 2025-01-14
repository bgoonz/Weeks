const asyncForEach = async (array: Array<any>, callback: Function): Promise<any> => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export default asyncForEach;
