#include <iostream>
#include <vector>
#include <algorithm> 
using namespace std;

class Solution {
    public:
    void largestArray(vector<int>& arr1, int k) {
        sort(arr1.begin(), arr1.end());
        int n = arr1.size();

        cout << "The largest element in the array is: " << arr1[n - k] << ", "
             << "kth smallest element is: " << arr1[k - 1] << endl;
    }
};
int main() {  
    vector<int> arr ;
    arr.push_back(1);
    arr.push_back(3);
    arr.push_back(5);
    arr.push_back(4);
    arr.push_back(2);

    Solution obj;
    obj.largestArray(arr,3);

    return 0;
}
