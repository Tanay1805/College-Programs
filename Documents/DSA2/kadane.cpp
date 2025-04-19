#include <iostream>
using namespace std;

int main() {
    int n = 0;
    int sum =0;
    int max=0;

    cout << "Enter the number of elements you want in your array: ";
    cin >> n;

    int arr[n]; 

    for (int i = 0; i < n; i++) {
        cout << "Enter the number " << i + 1 << ": ";
        cin >> arr[i];
    }

    cout << "Array elements are: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
