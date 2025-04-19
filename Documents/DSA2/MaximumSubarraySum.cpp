#include <iostream>
using namespace std;

int maxSum(int arr[],int n,int k){

    int max_sum = INT_MIN;

    for(int i=0;i<n-k+i;i++){
        int current_sum = 0;
        for(int j=0;j<k;j++){
            current_sum = current_sum + arr[i + j];
        max_sum = max(current_sum, max_sum);
        }
    return max_sum;
    }
}
int main(){
    int arr[10] = {1,2,3,4,5,6,7,8,9};
    int k = 4;
    int n = sizeof(arr)/sizeof(arr[0]);
    maxSum(arr,n,k);
    return 0;
}