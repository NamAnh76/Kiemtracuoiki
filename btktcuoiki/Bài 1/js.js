let menu = [" Rau xào"," Thịt luộc"," Gà rán"];
localStorage.setItem("Menu hien tai la :",menu);

let input;
do{
    input = prompt("Mời người dùng nhập c,r,u,d")
    if (input == 'c'){
        menu.push(prompt ("Mời người dùng nhập món ăn muốn thêm"))
        localStorage.setItem("Menu mon an la:",menu)
    }
    else if (input == 'r'){
        prompt("Menu mon an la:",menu)
    }
    else if (input == 'u'){
        let vitriUpdate = menu.indexOf(prompt("Mời người dùng nhập món ăn muốn update"))
        menu[vitriUpdate] = prompt("Mời người dùng nhập món ăn muốn mới")
        localStorage.setItem("Menu sau update là:",menu)
    }
    else if (input == 'd'){
        let vitriDelete = menu.indexOf(prompt("Mời người dùng nhập món ăn muốn Delete"))
        menu.splice(vitriDelete, 1);
        localStorage.setItem("Menu sau khi delete là",menu);
    }
    else{
        alert("khong ton tai vong lap => thoat vong lap")
    }
}
while(input == 'c' || input =='r'|| input =='u'|| input =='d')