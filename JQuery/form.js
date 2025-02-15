$(function(){

        const form = $("#form");
        const fullname = $("#sname");
        const fname = $("#fname");
        const mname = $("#mname");
        const dob = $("#dob");
        const adharnumber = $("#adharnumber");
        const phoneno = $("#phoneno");
        const address = $("#address");
        const email = $("#email");
        const Category = $("#Category");
        const tenth = $("#tenth");
        const twelfth = $("#twelfth");
        const dbms = $("#dbms");
        const gender = $("gender");
        const gender_value = $("#female");
        const subjects = $("subjects");


        function errorMsg(input, message) {
            const form_control = $(input).parent();
            $(form_control).addClass("error");
            const small = form_control.find("small");
            $(input).css('border',"2px solid red");
            $(small).text(message);
        
        }

        
        function successMsg(input) {
            const form_control = $(input).parent();
            const small = form_control.find("small");
            $(small).text("");
            $(input).css('border',"2px solid green");
        }

        
        function errorMsg2(input, message) {
            const form_control = $(input).parent();
            $(form_control).addClass("error");
            const small = form_control.find("small");
            $(small).text(message);        
        }
            
            
        function successMsg2(input) {
            const form_control = $(input).parent();
            $(form_control).addClass("success");
            const small = form_control.find("small");
            $(small).text("");
            
        }
            
                         
        
        $('form').on('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            if (fullname.val().trim().length === 0) {
                errorMsg(fullname, "Student Name cannot be blank");
                isValid = false;
            }
            else {
                const nameRegex = /^[a-zA-Z]{3,14}(?:[\s]{0,2})$/;
                if (nameRegex.test(fullname.val())) {
                    successMsg(fullname);
                }
                else {
                    errorMsg(fullname, "Name must contains atleast 3 characters and maximum 16 \n characters(including: alphabets,space and underscore)");
                    isValid= false;
        
                }
            }
        
        
            if (fname.val().trim().length === 0) {
                errorMsg(fname, "Father Name cannot be blank");
                isValid = false;
            }
            else {
                const nameRegex = /^[a-zA-Z]{3,14}(?:[\s]{0,2})$/;
                if (nameRegex.test(fname.val())) {
                    successMsg(fname);
                }
                else {
                    errorMsg(fname, "Name must contains atleast 3 characters and maximum 16 \n characters(including: alphabets,space and underscore)");
                    isValid= false;
        
                }
            }
        
            if (mname.val().trim().length === 0) {
                errorMsg(mname, "Mother Name cannot be blank");
                isValid = false;
            }
            else {
                const nameRegex = /^[a-zA-Z]{3,14}(?:[\s]{0,2})$/;
                if (nameRegex.test(mname.val())) {
                    successMsg(mname);
                }
                else {
                    errorMsg(mname, "Name must contains atleast 3 characters and maximum 16 \n characters(including: alphabets,space and underscore)");
                    isValid= false;
        
                }
            }

        
            if($('#dob').val()){
                successMsg(dob);
            }
            else {
                
                errorMsg(dob,"Select your dob");
                isValid = false;
            }


            let check = false;
            for (i = 0; i < gender.length; i++) {
                if (gender[i].checked){
                    check = true; 
                    break;
                }else{
                    check = false;
                }      
            }
        

            if (check === false){
                errorMsg2(gender_value,"select your gender");
                isValid = false;
            }else {
                successMsg2(gender_value); 
                  
            }


         
            

            if($('#Category').val()){
                successMsg(Category);
            }
            else {
                
                errorMsg(Category,"Select your Category");
                isValid = false;
            }
        

            if (tenth.val().length === 0 ) {
                errorMsg2(tenth, "Upload 10th certificate");
                isValid = false;
            }
            else {
                successMsg2(tenth);
            }


         
            if (twelfth.val().length === 0 ) {
                errorMsg2(twelfth, "Upload 12th certificate");
                isValid = false;
            }
            else {                
                successMsg2(twelfth);                                
            }
        
         
        
            if (email.val().trim().length === 0) {
        
                errorMsg(email, "Email ID cannot be blank");
                isValid = false;
            }
            else {
                const emailRegex = /^[a-zA-Z0-9]+(?:[.+%_][a-zA-Z0-9]+)*@[A-Za-z]+\.[a-zA-Z]{2,}$/;
                if (emailRegex.test(email.val())) {
                    successMsg(email);
                } else {
                    errorMsg(email, "This is not a valid email id");
                    isValid = false;
                }
            }


            if (address.val().trim().length === 0) {
                errorMsg(address, "Address cannot be blank");
                isValid = false;
            }
            else {
                const nameRegex = /^[a-zA-Z0-9\s]$/;
                if (nameRegex.test(address.val())) {
                    successMsg(address);
                }
                else {
                    errorMsg(address, "Address has following characters(including: alphabets,underscore and numbers)");
                    isValid= false;
        
                }
            }


            if (adharnumber.val().trim().length === 0) {
        
                errorMsg(adharnumber, "Aadhaar No cannot be blank");
                isValid = false;
            }
            else {
                const adharnumberRegex = /^[0-9]{12}$/;
                if (adharnumberRegex.test(adharnumber.val())) {
                    successMsg(adharnumber);
                } else {
                    errorMsg(adharnumber, "This is not a valid Aadhaar No");
                    isValid = false;
                }        
            }
        
        
            if (phoneno.val().trim().length === 0) {
        
                errorMsg(phoneno, "Phone No cannot be blank");
                isValid = false;
            }
            else {
                const phonenoRegex = /^[0-9]{10}$/;
                if (phonenoRegex.test(phoneno.val())) {
                    successMsg(phoneno);
                } else {
                    errorMsg(phoneno, "This is not a valid Phone No");
                    isValid = false;
                }
        
            }

        
            let check2 = false;
            for (i = 0; i < subjects.length; i++) {
                if (subjects[i].checked){
                    check2 = true; 
                    break;
                }else{
                    check2 = false;
                }                    
            }
            
            if (!check2){
                errorMsg2(dbms,"Select your Subjects");
            }else {
                successMsg2(dbms);
                
            }


        
        
            if(isValid){                       
        
                const formData = new FormData(form);
                        
                $('#form').post('../PHP/admissionform.php', {
                    body: formData
                }) 
                .then(() => {
                    alert("form data submitted Succesfully."); 
                    form.reset(); 
                     
                })
                .catch(error => {
                    console.error('Error:', error);
                    
                });

            }  
                
                
            
        
        });


    }) 
        