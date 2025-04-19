//Delete an element from the heap


#include <iostream>
#include <vector>
#include <algorithm>


using namespace std;
int main(){
    vector <int> v1;
    v1.push_back(88);
    v1.push_back(55);
    v1.push_back(77);
    v1.push_back(22);
    v1.push_back(33);
    v1.push_back(44);
    v1.push_back(66);
    make_heap(v1.begin(),v1.end());

    auto if33 = find(v1.begin(),v1.end(),33);
    if (if33 != v1.end()) {
        v1.erase(if33);
        make_heap(v1.begin(), v1.end()); 
    }
    auto if44 = find(v1.begin(),v1.end(),44);
    if (if33 != v1.end()) {
        v1.erase(if44);
        make_heap(v1.begin(), v1.end()); 
    }

    cout<<"The element is:"<<v1.front();
    

}