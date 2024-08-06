#include <bits/stdc++.h>
#include <vector>

using namespace std;
#define long long ll;

vector<string> nameArray;

string hash(string name) {
    string result;
    ll nameSize = name.size();
    vector<long long>charASCII;
    charASCII.resize(nameSize);
    for (ll i = 0; i < nameSize; i++)
        charASCII[i] = name[i];
    return result;
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    string input;
    while (cin >> input) {
        nameArray.push_back(input);
    }

    return 0
}