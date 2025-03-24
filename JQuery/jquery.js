$(function () {

    // console.log("We are using jQuery");
    // jQuery Syntax looks like this
    // $('selector').action()


    //clicks on all the p elements.
    // $('p').click(); //click on p
    // $('p').click(function () {
    //     console.log('you clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // }); //do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // });



    // $('p').hover(function () {
    //     console.log('you hoverd on: ', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // },
    // function (){

    //     console.log('Thanks for coming')
    // });

    // when we hover on paragraph then on console "you have hoverd on: " paragraph content will be printed. and when we move mouse away from paragraph then "Thanks for coming is printed"






    // there are three main types of selectors in jQuery 
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector -  This is an example of element selector which clicks on all p
//     $('p').on('click', function(){
//         console.log("p is clicked")
//     });

//     //2. Id selector - this is an example of id selector
//     $('#second').on('click', function(){
//         console.log("element with second id is clicked")
//     });

//     //3. Class selector - this is an example of class selector
//     $('.odd').on('click', function(){
//         console.log("element with odd class is clicked")
//     });

//     //other selectors
//     $('*').on('click', function(){
//         console.log("All elements are clicked")
//     }); 

    // $('p.odd').on('click', function(){
    //     console.log("p elements with odd class is clicked");
    // });

    // $('p:first').on('click', function(){
    //     console.log("first p element is clicked");
    // });

    // $('p:eq(1)').on('click', function(){
    //     console.log("second p element is clicked");
    // });// eq() starts from 0.

    // $('ul li:first').on('click', function(){
    //     console.log("first list item is clicked");
    //     $(this).hide();
    // });

    // $('ul li:first-child').on('click', function(){
    //     console.log("first child of list is clicked");
    //     $(this).hide();
    // });

    // $('ul li:nth-child(2)').on('click', function(){
    //     console.log("second child of list is clicked");
    //     $(this).hide();
    // });

    // $('[href]').on('click', function(){
    //   console.log("a is clicked");
    // });

    // $("a[target ='_blank']").on('click',function(){
    //     console.log('a with _blank target is clicked')
    // })


    // $("a[target !='_blank']").on('click', function(){
    //     console.log("anchor without target _blank is clicked");
    //     $(this).hide();
    // });



//     //:button => It basically selects all the button elements and input type button. 
    // $(':button').on('click', function(){  
    //     console.log("button is clicked");
    // });


//    // Remember that odd and even start with zero.
    // $('tr:even').on('click', function(){
    //     console.log("even row is clicked");
    //     $(this).hide();
    // });

    // $('tr:odd').on('click', function(){
    //     console.log("odd row is clicked");
    //     $(this).hide();
    // });



//     // Events in jQuery
//     // Mouse events = click, dblclick, mouseenter, mouseleave,mousemove,mouseup,mousedown,mouseout,mouseover

//     // Note : all the events function name follow smallcase rule. 




    // Mouse Events :
    // $('p').on("click", function (){
    //     alert("hello");
    // })



    // $('p').on(
    //     {
    //         dblclick:function(){
    //             console.log('double click');
    //        },
    //         click: function () {
    //             console.log('Thanks for clicking', this);
    //         },
           
    //         mouseleave: function () {  // when the mouse leaves from the complete element
    //             console.log("mouseleave");

    //         },
    //         mouseenter: function () {  // when the mouse enter in the element
    //             console.log("mouseenter");

    //         },
    //         mouseover: function () {  // when the mouse is over the element
    //             console.log("mouse over the element");

    //         },

    //         mouseup:function(){  // when mouse button is released after pressed
    //             console.log("mouse up");
    //         },
    //         mousedown:function(){  // mouse button is pressed 
    //             console.log("mouse down");
                
    //         },
    //         mousemove:function(){  // when we move the mouse over the element
    //             console.log("mouse move");

    //         },
    //         mouseout:function(){ //Triggered when the mouse pointer is moved out of an element or one of its child elements.
                
    //             console.log("mouse out");
    //         },



    //    })


    // $('p').hover(
    // //It was depricated because it binds the mouseenter and mouseleave

    // function(){
    //     console.log("we have entered in")
    // },
    // function(){
    //     console.log("we have left the element");
    // })


    // $(selector).bind(event,data,handlerfunction,map) //depricated
    // instead of bind we can use "on"


     // $(selector).unbind(event,handlerfunction,eventObj) // depricated
    // instead of unbind we can use "off"


    // const eventhandler = function (){
    //     console.log('click event is applied');
    // }
    // $('#btn').on('click',eventhandler);
    // $('#btn2').on('click',function(){
    //     $('#btn').off('click',eventhandler);
    //     console.log("click event handler is removed from btn1")
    // }
    // )


    //    $(selector).select()  // depricated
       // Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
       // instead of it  we can use "on" and ".trigger('select')"

    //    $('#subject').on('select',function(){
    //     console.log($(this).text());
        
    //    })

    //    $('#subject').trigger('select');


    //    $(selector).change()  // depricated
    // instead of it we can use "on" ".trigger('change')"

    // $('#subject').on('change',function(){
    //     console.log($(this).text());
        
    //    })

    //    $('#subject').trigger('change');




//     // KeyboardEvent = keypress, keydown,keyup
//     let keypressCount =0 ; 
//     let keyupCount =0 ; 
//     $('#sname').on(
//     {
//         keypress:function (event){  // when the key is pressed
//         // console.log("key is pressed",event.key);
//         // detects only letters, numbers, symbols not special keys 
//         keypressCount++;
//         console.log("key pressed",keypressCount);
        

//         // we can detect the specific key using "event.key" properties. 

//         },
//         keydown:function (){ // when the key is push to down and it containes all keys  includes special keys like function keys. 
            
//         console.log("keydown");
//         },
//         keyup:function (){
//         // console.log("keyup");  // when the key is released after pressed
//         keyupCount++;
//         console.log("key up",keyupCount);
       
//         },

//     }
// );



   //form events = submit, change, focus, blur

    // $('form').on('submit',function (event){  // when the submit button is pressed
    //         event.preventDefault();
    //         console.log("form is submitted");
    //         },
            

    // );

    // $('#name').on('change',function (){ // Fires when the value of an input/select/textarea changes.
    //     console.log("change event");
    //     }
    // );
    
    // $('#job').on('focus',function (){ //Fires when an element gains focus.

    //     console.log("focus event");
    //     }
    // );

    // $('#job').on('blur',function (){ // Fires when an element loses focus.

    //     console.log("blur event");
    //     }
    // );
 
//     // $('p').delegate()  // depricated 
        // instead of it we can use "on" 



     // document/window events = load, resize, scroll, unload
        // $(window).on(
        //     {
        //         load:function (){  // Triggers when the window is fully loaded (including images, styles, etc.).

        //         console.log("window is full loaded");
        //         },
        //         resize:function (){  // Fires when the window is resized.

        //             console.log("window is resized");
        //         },
        //         scroll:function (){  // Fires when the user scrolls the page.

        //             console.log("window is scrolled");
        //         },
        //         unload:function (){  // Triggers when the user leaves or reloads the page (deprecated).

        //             console.log("window is reloaded");
        //         },
                
        //     }

        // );

   
        // ready ->	Fires when the DOM is ready (before full page load).
        // click ->	Detects clicks anywhere on the page.
        // dblclick	->Detects double clicks.
        // mousemove ->	Detects mouse movement.
        // keydown / keyup ->	Detects keyboard input.
        // contextmenu	-> Detects right-click events.

        // $(document).on("contextmenu", function (event) {
        //     console.log("Clicked at: X=" + event.pageX + ", Y=" + event.pageY);
        // });

        // we can use all these properties with document.
        



    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })   
//     the #wiki element gradually hides over 1 second.


    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })  

    // $("#wiki").on('click',function(){
        // $("p").toggle();
        // hide the element if it is visible and show the element if it is hide on the click of  #wiki element. 
    //   });



// syntax : $(selector).fadeIn(duration, callback);
// callback function is optional 
//     //  fadeIn() :  fadeIn a hidden element
//         $('#wiki').fadeIn(1000,function (){
//             console.log("fade in completed");
//         })


//     // fadeOut() : fadeOut a visible element.
//     $('#wiki').fadeOut(1000,function (){
//         console.log("fade out completed");
//     })

 
//     // fadeToggle() : fadeIn if invisible and fadeOut if visible.
//     $('#wiki').fadeToggle(1000,function (){
//         console.log("fade out completed");
//     })

//     //fadeTo()  :  changes an element's opacity to some extent.
//      $('#wiki').fadeTo(1000,0.5,function (){
//         console.log("fade out completed");
//     })




//     // Slide methods - speed and callback parameters are optional
//     $('#wiki').slideUp(1000, function(){
//         console.log('done');
//     })

// slideUp is used when the element is visible and we want to slideup the element or we can say that we want to hide the element by animating the element moving up.




//     $('#wiki').slideDown(1000,function(){
//         console.log("slide down completed")
//      })

//     slideDown is used when the element is invisible and we want to display by moving the element down.

//     $('#wiki').slideToggle(1000)   // slideUp if visible and slideOut if hidden.



  

//   Animate function in jQuery

// The jQuery animate() method is used to create custom animations.


    // animate : $('#wiki').animate({property},duration,easing,complete_function)
    // property means  css properties
    // duration means how long the animation will run.  like : 400(millisecond) , slow ,fast.
    // easing means the which easing function wil be used. it can be 'swing'(by default ) and 'linear'.
    // complete_function is the function which will be called when the animation is completed.


    // $('#box2').animate({
    //    width:'400px',
    //    height : '100px',
    //    opacity:0.3,
       
    // },2000)


//     $('#wiki').animate({ opacity: 0.3 }, 4000);
//     $('#wiki').animate({ opacity: 0.9 }, 1000);
//     $('#wiki').animate({ width: '350px' }, 12000);


    // we can stop the animation : 
    // $("#wiki").stop();




// JQuery CSS methods 

// $('#wiki').css('display','none'); //we can apply css using propertyname and its value

// adding multiple css property;
    //   $('#wiki').css({
    //     'background-color': 'lightblue',
    //     'font-size': '20px',
    //     'padding': '10px'
    // });


    // $('#wiki').css('font-size', function(index, currentValue) {
    //     console.log(index,currentValue);
    //     return parseInt(currentValue) + 20 + 'px';  // here the index will be 0 and current value is will be 16px which is bydefault font size in html
    // });



    // JQuery get Set method

//       we can find the text inside a particular element .
    // $("#wiki").text();
//     // we can set the text inside a particular element .
//     $('#wiki').text('you are good');




//     // we can find the html element 
//     $("body").html();
//     // we can set the html element 
//     $("body").html('I am a programmer');


//     // we can find the value inside a particular element of form like input , text area.
//     $("#username").val();
//     // we can set the value inside these form elements .
//     $('#username').val('Please use your user name');
  



//     // we find the attribute value of any html element
//     $('a').on('click',function(){
//         console.log($('a').attr('href'));
//     })

//     // we set the attribute value of any html element
//     $('a').on('click',function(){
//         console.log($('a').attr('href','https://www.javatpoint.com'));
//     })

//    we can set multiple attributes to an element at the same time 

//      $('a').on('click',function(){
//         $('a').attr({
//     'href':'https://www.javatpoint.com',
//     'title':'This goes to javatpoint'
//     });
//     })

//     // In attr method we have also a callback function which returns index of the current element in the list of selected element and its original value :
//     $('a').on('click',function(){
//        let a =  $('this').attr('href',function(index,originalValue){
//            return originalValue;
//         });
//         console.log(a);
//     })



// jQuery methods that are used to add new content
// append() - Inserts content at the end of the selected elements(inside)
// prepend() - Inserts content at the beginning of the selected elements(inside)
// after() - Inserts content after the selected elements
// before() - Inserts content before the selected elements
 
// we can set multiple content to html element or after the html element using these four methods(append,prepend,after,brfore)


//     // we can empty any container element.
//     $('#wiki').empty();

//     // we can remove the element from dom.
//     $('#wiki').remove()
//      $('p').remove('.cssClass'); // remove the paragraph with ".cssClass"
//      $('p').remove('.cssClass1','cssClass2'); // remove the paragraph wih '.cssClass1' or 'cssClass2'




//     $('#wiki').addClass('myclass')  // add classes to particular element
//     $('#wiki h1 h2').addClass('myclass myclass2')  // add multiple classes to multiple element
//     $('#wiki').removeClass('myclass2')
//     $('#wiki').toggleClass('myclass2')
   

     // AJAX : It is a technique that allows to exchange data between client and server without reloading the page.


    // AJAX Using jQuery
    // inbuilt method using ajax method


    // The serialize() method creates a URL encoded text string by serializing form values.
    // $("form").on('submit',function(event){
    //     event.preventDefault();
    //     $("#message").text($(this).serialize());
        
    //     });
    //Output like this:  name=John&job=swe
    

    $('#myform').on('submit',function(event){
        event.preventDefault();    
      
       const data = $(this).serializeArray();
       console.log(data);
       const jsonData = {};
       $.each(data,function(index,field) {
         jsonData[field.name] = field.value;
       })
       console.log(JSON.stringify(jsonData));
    })


    // $('#btn').on('click',function(){
    //     $('#message').load('./load.html',function(responseTxt , statusTxt,xhr){
        // It loads the .load.html from server to #message element. 

        //    responseTxt - contains the resulting content if the call succeeds
        // statusTxt - contains the status of the call
        // xhr - contains the XMLHttpRequest object


    //     if(statusTxt ==  "success"){
    //         alert("Content loaded successfully");
    //     }else if (statusTxt == "error"){
    //         alert(xhr.statusText + " " + xhr.status)
    //     }
    // });
    // })


    // GET - Requests data from a specified resource
    // $.get('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
    //  function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // POST - Submits data to be processed to a specified resource
    // $.post('https://67b0539ddffcd88a6788e9c8.mockapi.io/api/Users   ',
    //     { id : 12,  name: 'David', job: 'swe' },
    //     function (data, status) { alert(status) });

});


