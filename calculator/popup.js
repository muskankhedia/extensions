// $(function(){
//     var input_text= 0;
//     $('total').text(input_text);
//     $('#1').click(function(){
//         input_text = 1;
//         $('#total').text(input_text);
//     });
// });

$(function() {
    $("input:text").val('0');
    var total = 0;
    var num = 0;
    var operator ='';
    $("button").click(function()  {

        // num = $('#total').val();   

        var val = $(this).text();
        if($.isNumeric(val))
        {
            num = (parseInt(num))*10 + parseInt(val);
            $("input:text").val(num);
        }

        else
        {
            if(val == "C")
            {
                $("input:text").val('0');
                total = 0;
                num =0;
            }
            else if(val != "=")
            {
                $("input:text").val(num + val);
                operator = val;
                total = oper(operator,total,num);
                num = 0;
                
            }

            if(val == "=")
            {
                total = oper(operator,total,num);
                num = 0;
                $("input:text").val(total);       
                total =0; 
            }
        }
    });
});

function oper(op,t,n){
    if (op == "+")
    {
        t = t+n;
        return t;
    }
    if (op == "-")
    {
        t = t-n;
        return t;
    }
    if (op == "*")
    {
        if(t==0)
        {
            t=1;
        }
        t = t*n;
        return t;
    }
    if (op == "/")
    {
        t = t/n;
        return t;
    }

}


// $(function() {

//     let num1 = '';
//     let num2 = '';
//     let operator = '';
//     let total = '';

//     $('button').on('click', function() {

//         var val = $(this).text();
//         if($.isNumeric(val))
//         {
//             handleNumber(val);
//         } 
        
//         else {
//             handleOperator(val);
//         }
//     });
// });


// function handleNumber(num) {
//     if (num1 === '') {
//         num1 = num;
//     } else {
//         num2 = num;
//     }
//     displayButton(num);
// }


// function handleOperator(oper) {
//     if (operator === '') {
//         operator = oper;
//     } else {
//         handleTotal();
//         operator = oper;
//     }
// }
// function handleTotal() {
//     switch (operator) {
//         case '+':
//             total = +num1 + +num2;
//             displayButton(total);
//             break;
//         case '-':
//             total = +num1 - +num2;
//             displayButton(total);
//             break;
//         case '/':
//             total = +num1 / +num2;
//             displayButton(total);
//             break;
//         case 'X':
//             total = +num1 * +num2;
//             displayButton(total);
//             break;
//     }
//     updateVariables();
// }
// function displayButton(btn) {
//     $("input:text").val(btn);
// }
// function updateVariables() {
//     num1 = total;
//     num2 = '';
// }