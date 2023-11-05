export const bubbleSort = (arr) =>
{
    let states = [ [...arr]];
    let i, j, temp;
    let swapped;
    for (i = 0; i < arr.length - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < arr.length - i; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                states.push([...arr]);
                swapped = true;
            }
        }
 
        if (swapped == false)
        break;
    }

    return states;
}