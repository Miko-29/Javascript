function count(event){
    let input = event.currentTarget.value;
    let vowel = 0;
    let consonant = 0;
    let number = 0; 
    // console.log(input);
    for(let i=0 ; i<input.length ; i++){
        let char = input[i];
        if(char==='a' || char=='e' || char==='i'|| char==='o' ||char==='u')
        {
            vowel++;
        }
        else if(char>='0' && char <='9'){
            number++;
        }
        else if(char>='b' && char<='z')
        {
            consonant++;
        }
    }
     
    // console.log(vowel);
    // console.log(consonant);
    // console.log(number);
    document.getElementById("vowel").textContent = vowel;
    document.getElementById("consonant").textContent = consonant;
    document.getElementById("number").textContent = number;

}