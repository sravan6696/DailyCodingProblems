// incomplete

#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int data;
    Node* prevnext;
    Node(int data){
        data = data;
    }
};

void addElement1(Node* curr, Node* n1, Node* next){
    if(next == NULL){
        curr->prevnext = curr ^ n1;
        return;
    }
    else{
        return addElement1(next, n1, next->prevnext^curr);
    }
}

void addElement(Node* head, int elem){
    Node* next = head->prevnext;
    Node* curr = head;
    Node* n1 = new Node(elem);
    addElement1(curr, n1, next);
    return;
}

int getfn(Node* curr, Node* next, int index){
    if(index == 0) return curr->data;
    else{
        getfn(next, next->prevnext^curr, index-1);
    }
}

int get(Node* head, int index){
    Node* next = head->prevnext;
    Node* curr = head;
    return getfn(curr, next, index);
}

int main(){
    
    // create a linked list
    Node head = new Node(2);

    addElement(head, 3);
    addElement(head, 4);
    addElement(head, 1);

    cout << get(head, 1);

}