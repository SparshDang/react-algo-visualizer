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
 
        if (swapped === false)
        break;
    }

    return states;
}

export const insertionSort = (arr) => {  
    let states = [ [...arr]];
    let i, key, j;  
    for (i = 1; i < arr.length; i++) 
    {  
        key = arr[i];  
        j = i - 1;  

        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  

        }  
        arr[j + 1] = key;  
        states.push([...arr]);
    }  
    return states;
}  
export const selectionSort = (arr, ) =>
{
    let states = [ [...arr]];
    let i, j, min_idx;
 
    for (i = 0; i < arr.length-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < arr.length; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
        states.push([...arr]);
    }
    return states;
} 

function merge(arr, l, m, r)
{
    let n1 = m - l + 1;
    let n2 = r - m;
 
    let L = new Array(n1); 
    let R = new Array(n2);
 
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    let i = 0;
 
    let j = 0;
 
    let k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    return arr;
}
 

const mergeSort__ = (arr,l, r, states) => {
    if(l>=r){
        return states;
    }
    let m =l+ parseInt((r-l)/2);
    mergeSort__(arr,l,m, states);
    mergeSort__(arr,m+1,r, states);
    let new_arr = merge(arr,l,m,r);
    states.push([...new_arr]);
    return states
}

export const mergeSort = (arr) => {
    let states = [[...arr]];
    states = mergeSort__(arr, 0, arr.length - 1, states);
    return states;

}