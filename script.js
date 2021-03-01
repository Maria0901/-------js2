function insert(num) {
    let intro = document.form.textview.value;
    let newIntro = intro + num;
    let regExp = /[-+*\/\(]0\d/;
    let regExp1 = /0\d/;
    arrayWithEmptyReturn = ['/', '*', ')'];
    arrayWithSymbolBeforeLast = ['()', '(/', '(*', '+)', '-)', '/)', '*)'];
    arrayWithLastSymbolReturn = ['//', '**', '++', '--', '+-', '-+', '+*', '-*', '/*', '+/', '-/', '*/', '*+', '*-', '..'];
    let lastTwoSymbols = newIntro.slice(-2);
    let lastThreeSymbols = newIntro.slice(-3); 

    if (intro !== 'Ошибка' && intro.length <= 15){
            replaceCheck(arrayWithEmptyReturn, lastTwoSymbols, "");
            replaceCheck(arrayWithLastSymbolReturn, lastTwoSymbols, lastTwoSymbols.slice(-1));
            replaceCheck(arrayWithSymbolBeforeLast, lastTwoSymbols, lastTwoSymbols.slice(-2, -1));

            function replaceCheck (arrayName, whatReplace, atReplace) {
                arrayName.forEach(element => {
                    if (lastTwoSymbols === element) {
                        newIntro = newIntro.replace(whatReplace, atReplace);
                    }
                });
            }
            if (regExp.test(lastThreeSymbols)) {
                newIntro = newIntro.slice(0, -3) + lastThreeSymbols[0] + lastThreeSymbols[2];
            }
            if (newIntro.length === 2 && regExp1.test(lastTwoSymbols)){
                newIntro = newIntro.replace(lastTwoSymbols, lastTwoSymbols.slice(-1));
            }
            document.form.textview.value = newIntro;
    }
}

function back() {
    if (document.form.textview.value !== 'Ошибка'){
        var exp = document.form.textview.value;
        document.form.textview.value = exp.substring(0,exp.length-1);
    }
}

function equal() {
    var exp = document.form.textview.value;
    let count = exp.length - 1;
    if(exp !== '+' && exp !== '-' && exp !== '++' && exp !== '--' && exp !== '+-' && exp !== '-+') {
       document.form.textview.value = eval(exp).toFixed(5);
       if (eval(exp) === Infinity) {
        document.form.textview.value = 'Ошибка';
       }
    } else {
        document.form.textview.value = 'Ошибка';
    }
}