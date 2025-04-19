#include <iostream>
#include <vector>
#include <queue>

using namespace std;

void kth_Largest_MaxHeap(vector<int>& arr, int k) {
    priority_queue<int> pq;
    for (int i = 0; i < arr.size(); i++) {
        pq.push(arr[i]);
    }
    
    for (int i = 0; i < k - 1; i++) {
        pq.pop();
    }
    
    cout << "The " << k << "-th largest element is: " << pq.top() << endl;
}

int main() {
    vector<int> arr = {10, 7, 11, 5, 2, 8, 12, 6};
    int k = 3;
    
    kth_Largest_MaxHeap(arr, k);
    
    return 0;
}
