var height = $('#TopMenu').height();
var HelperHeight = 630;
$(window).scroll(function(){
    if($(this).scrollTop() > height){
        $('#TopMenu').css({ 'background-color' : '#484d52', 'position' : 'fixed' });
        
    }
    else if($(this).scrollTop() <= height){
        
        $('#TopMenu').css({ 'background-color' : '', 'opacity' : '', 'position' : 'fixed' });
        }

        
});

$(document).scroll(function() {

    console.log($("#Facts").offset().top);
        
        

        var Y = $(this).scrollTop()
        
   

    if( ($(window).scrollTop() > $("#Form").offset().top - 20)){

        $("#AboutUsA").css("color","");
        $('#TheTeamA').css('color','');
        $('#ImpressionsA').css('color','');
        $('#ContactA').css('color','#ffdc08');

        $("#AboutUsB").css("color","");
        $('#TheTeamB').css('color','');
        $('#ImpressionsB').css('color','');
        $('#ContactB').css('color','#ffdc08');
       }
    if(($("#Gallery").offset().top > $(window).scrollTop()) && ($(window).scrollTop() > $("#Team").offset().top) || ($("#Gallery").offset().top > $(window).scrollTop()) && ($(window).scrollTop() > $("#Team_Phone").offset().top)){

        $("#AboutUsA").css("color","");
        $('#TheTeamA').css('color','#ffdc08');
        $('#ImpressionsA').css('color','');
        $('#ContactA').css('color','');

        $("#AboutUsB").css("color","");
        $('#TheTeamB').css('color','#ffdc08');
        $('#ImpressionsB').css('color','');
        $('#ContactB').css('color','');
       }
       if(($("#Form").offset().top > $(window).scrollTop()) && ($(window).scrollTop() > $("#Gallery").offset().top - 20)){

        $("#AboutUsA").css("color","");
        $('#TheTeamA').css('color','');
        $('#ImpressionsA').css('color','#ffdc08');
        $('#ContactA').css('color','');

        $("#AboutUsB").css("color","");
        $('#TheTeamB').css('color','');
        $('#ImpressionsB').css('color','#ffdc08');
        $('#ContactB').css('color','');
       }
    if(($("#Team_Phone").offset().top > $(window).scrollTop()) && ($(window).scrollTop() > 620) || ($("#Team").offset().top > $(window).scrollTop()) && ($(window).scrollTop() > 620)){

     $("#AboutUsA").css("color","#ffdc08");
     $('#TheTeamA').css('color','');
     $('#ImpressionsA').css('color','');
     $('#ContactA').css('color','');

     $("#AboutUsB").css("color","#ffdc08");
     $('#TheTeamB').css('color','');
     $('#ImpressionsB').css('color','');
     $('#ContactB').css('color','');
    }if($(window).scrollTop() < 620){

        $("#AboutUsA").css("color","");
        $('#TheTeamA').css('color','');
        $('#ImpressionsA').css('color','');
        $('#ContactA').css('color','');

        $("#AboutUsB").css("color","");
        $('#TheTeamB').css('color','');
        $('#ImpressionsB').css('color','');
        $('#ContactB').css('color','');
    }
    
});

var AlreadyCLicked = 0;
var MyInner2 = '<img id="Close_Image" src="Images/Form 7.png" style="display: inline-block;">';
var menu = document.getElementById('Menu_Phone');

function MakeVisible()
{
    /*fix for header color */
    var height = $('#TopMenu').height();
    
    



    if(AlreadyCLicked == 0){
        document.getElementById('TopMenu').style.backgroundColor = "#161b20";
        var Button = document.getElementById('Button_Menu');
        
        Button.innerHTML = MyInner2 + " CLOSE";
        
        menu.style.visibility="visible";
        AlreadyCLicked=1;

        $(window).scroll(function(){
            if($(this).scrollTop() > height){
                $('#TopMenu').css({ 'background-color' : '#161b20', 'position' : 'fixed' });
                
            }
            else if($(this).scrollTop() <= height){
                
                $('#TopMenu').css({ 'background-color' : '#161b20', 'opacity' : '1', 'position' : 'fixed' });
                }
            
        });
        //console.log(AlreadyCLicked);
    }
    else {
        document.getElementById('Button_Menu').innerHTML = "MENU";
        document.getElementById('TopMenu').style.backgroundColor = "inherit";

        menu.style.visibility="hidden";
        AlreadyCLicked=0;

        $(window).scroll(function(){
            if($(this).scrollTop() > height){
                $('#TopMenu').css({ 'background-color' : '#161b20', 'position' : 'fixed' });
                
            }
            else if($(this).scrollTop() <= height){
                
                $('#TopMenu').css({ 'background-color' : '', 'opacity' : '', 'position' : 'fixed' });
                }
            
        });
        //console.log(AlreadyCLicked);
    }
    
}

function Flip(){
    $('.flip-container .flipper ').click(function() {
        $(this).closest('.flip-container').toggleClass('hover');
        $(this).css('transform, rotateY(180deg)');
    });
}

function Flip_phone(){
    $('.flip-container_phone .flipper_phone ').click(function() {
        $(this).closest('.flip-container_phone').toggleClass('hover');
        $(this).css('transform, rotateY(180deg)');
    });
}

function Gallery(){
    $('.Impression').click(function() {
        $('#Lightroom').css('display', 'inline');
    });
}
function CloseGallery(){
    $('#Gallery_close').click(function() {
        $('#Lightroom').css('display', 'none');
    });
}

var Position = 2;
var MemberData = [
    ['DICK','HARWEY','CAPTAIN','AGE: 56','MISSIONS: 13','DICK‘S FAMOUS QUOTE:','url("Images/Cowboys/cowboy-1.png")'],
    ['DICK','HARWEY','CAPTAIN','AGE: 56','MISSIONS: 13','DICK‘S FAMOUS QUOTE:','url("Images/Cowboys/cowboy-1.png")'],
    ['RICHIE','FARHEM','ENGINEER','AGE: 48','MISSIONS: 13','RICHIE‘S FAMOUS QUOTE:','url("Images/Cowboys/cowboy-2.png")'],
    ['JOHN','SIRACHA','GUNSLINGER','AGE: 47','MISSIONS: 13','JOHN‘S FAMOUS QUOTE:','url("Images/Cowboys/cowboy-3.png")'],
    ['BERT','McNAMERA','CAPTAIN','AGE: 71','MISSIONS: 13','BERT‘S FAMOUS QUOTE:','url("Images/Cowboys/cowboy-4.png")'],
    ['AL','SVERINGE','CEO','AGE: 76','MISSIONS: 13','AL‘S FAMOUS QUOTE:','url("Images/Cowboys/cowboy-5.png")']
];
function ChangeMemberLeft()
{
    var OldID = "e" + Position;
    Position--;
    if(Position==0)
    {
        Position=5;
    }
    var ID = "e" + Position;
    //console.log(ID);
    document.getElementById(ID).src = "Images/as.png";
    document.getElementById(OldID).src = "Images/Ellipse 3.png";

    // Member 1
    if(Position!=1){
        document.getElementById("MemberName1").innerHTML = MemberData[Position-1][0];
        document.getElementById("MemberSurname1").innerHTML = MemberData[Position-1][1];
        document.getElementById("MemberPosition1").innerHTML = MemberData[Position-1][2];
        document.getElementById("MemberAge1").innerHTML = MemberData[Position-1][3];
        document.getElementById("MemberMission1").innerHTML = MemberData[Position-1][4];
        document.getElementById("MemberQuote1").innerHTML = MemberData[Position-1][5];
        document.getElementById("MemberIMG1").style.backgroundImage = MemberData[Position-1][6];
    }else{
        
    document.getElementById("MemberName1").innerHTML = MemberData[5][0];
    document.getElementById("MemberSurname1").innerHTML = MemberData[5][1];
    document.getElementById("MemberPosition1").innerHTML = MemberData[5][2];
    document.getElementById("MemberAge1").innerHTML = MemberData[5][3];
    document.getElementById("MemberMission1").innerHTML = MemberData[5][4];
    document.getElementById("MemberQuote1").innerHTML = MemberData[5][5];
    document.getElementById("MemberIMG1").style.backgroundImage = MemberData[5][6];
    }
    // Member 2
    document.getElementById("MemberName2").innerHTML = MemberData[Position][0];
    document.getElementById("MemberSurname2").innerHTML = MemberData[Position][1];
    document.getElementById("MemberPosition2").innerHTML = MemberData[Position][2];
    document.getElementById("MemberAge2").innerHTML = MemberData[Position][3];
    document.getElementById("MemberMission2").innerHTML = MemberData[Position][4];
    document.getElementById("MemberQuote2").innerHTML = MemberData[Position][5];
    document.getElementById("MemberIMG2").style.backgroundImage = MemberData[Position][6];

    // Member 3
    if(Position!=5){
        document.getElementById("MemberName3").innerHTML = MemberData[Position+1][0];
        document.getElementById("MemberSurname3").innerHTML = MemberData[Position+1][1];
        document.getElementById("MemberPosition3").innerHTML = MemberData[Position+1][2];
        document.getElementById("MemberAge3").innerHTML = MemberData[Position+1][3];
        document.getElementById("MemberMission3").innerHTML = MemberData[Position+1][4];
        document.getElementById("MemberQuote3").innerHTML = MemberData[Position+1][5];
        document.getElementById("MemberIMG3").style.backgroundImage = MemberData[Position+1][6];
    }else{
        document.getElementById("MemberName3").innerHTML = MemberData[1][0];
        document.getElementById("MemberSurname3").innerHTML = MemberData[1][1];
        document.getElementById("MemberPosition3").innerHTML = MemberData[1][2];
        document.getElementById("MemberAge3").innerHTML = MemberData[1][3];
        document.getElementById("MemberMission3").innerHTML = MemberData[1][4];
        document.getElementById("MemberQuote3").innerHTML = MemberData[1][5];
        document.getElementById("MemberIMG3").style.backgroundImage = MemberData[1][6];
    }
}
function ChangeMemberRight()
{
    var OldID = "e" + Position;
    Position++;
    if(Position==6)
    {
        Position=1;
    }
    var ID = "e" + Position;
    //console.log(ID);
    document.getElementById(ID).src = "Images/as.png";
    document.getElementById(OldID).src = "Images/Ellipse 3.png";
    

     // Member 1
     if(Position!=1){
        document.getElementById("MemberName1").innerHTML = MemberData[Position-1][0];
        document.getElementById("MemberSurname1").innerHTML = MemberData[Position-1][1];
        document.getElementById("MemberPosition1").innerHTML = MemberData[Position-1][2];
        document.getElementById("MemberAge1").innerHTML = MemberData[Position-1][3];
        document.getElementById("MemberMission1").innerHTML = MemberData[Position-1][4];
        document.getElementById("MemberQuote1").innerHTML = MemberData[Position-1][5];
        document.getElementById("MemberIMG1").style.backgroundImage = MemberData[Position-1][6];
    }else{
        
    document.getElementById("MemberName1").innerHTML = MemberData[5][0];
    document.getElementById("MemberSurname1").innerHTML = MemberData[5][1];
    document.getElementById("MemberPosition1").innerHTML = MemberData[5][2];
    document.getElementById("MemberAge1").innerHTML = MemberData[5][3];
    document.getElementById("MemberMission1").innerHTML = MemberData[5][4];
    document.getElementById("MemberQuote1").innerHTML = MemberData[5][5];
    document.getElementById("MemberIMG1").style.backgroundImage = MemberData[5][6];
    }
    // Member 2
    document.getElementById("MemberName2").innerHTML = MemberData[Position][0];
    document.getElementById("MemberSurname2").innerHTML = MemberData[Position][1];
    document.getElementById("MemberPosition2").innerHTML = MemberData[Position][2];
    document.getElementById("MemberAge2").innerHTML = MemberData[Position][3];
    document.getElementById("MemberMission2").innerHTML = MemberData[Position][4];
    document.getElementById("MemberQuote2").innerHTML = MemberData[Position][5];
    document.getElementById("MemberIMG2").style.backgroundImage = MemberData[Position][6];

    // Member 3
    if(Position!=5){
        document.getElementById("MemberName3").innerHTML = MemberData[Position+1][0];
        document.getElementById("MemberSurname3").innerHTML = MemberData[Position+1][1];
        document.getElementById("MemberPosition3").innerHTML = MemberData[Position+1][2];
        document.getElementById("MemberAge3").innerHTML = MemberData[Position+1][3];
        document.getElementById("MemberMission3").innerHTML = MemberData[Position+1][4];
        document.getElementById("MemberQuote3").innerHTML = MemberData[Position+1][5];
        document.getElementById("MemberIMG3").style.backgroundImage = MemberData[Position+1][6];
    }else{
        document.getElementById("MemberName3").innerHTML = MemberData[1][0];
        document.getElementById("MemberSurname3").innerHTML = MemberData[1][1];
        document.getElementById("MemberPosition3").innerHTML = MemberData[1][2];
        document.getElementById("MemberAge3").innerHTML = MemberData[1][3];
        document.getElementById("MemberMission3").innerHTML = MemberData[1][4];
        document.getElementById("MemberQuote3").innerHTML = MemberData[1][5];
        document.getElementById("MemberIMG3").style.backgroundImage = MemberData[1][6];
    }
}

document.getElementById("InputName").addEventListener('change', IsCorrect);
document.getElementById("InputLastName").addEventListener('change', IsCorrect);
document.getElementById("InputMail").addEventListener('change', IsCorrectMail);

function IsCorrect()
{
    document.getElementById("Correct1").style.display = "none";
        document.getElementById("Correct2").style.display = "none";
    if(document.getElementById("InputName").value != "")
    {
        document.getElementById("Correct1").style.display = "inline-block";
    }
    if(document.getElementById("InputLastName").value != "")
    {
        document.getElementById("Correct2").style.display = "inline-block";
    }
   
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function IsCorrectMail()
{
        document.getElementById("Incorrect1").style.display = "none";
        document.getElementById("Correct3").style.display = "none";
        document.getElementById("InputMail").style.borderColor = "#484d52";
        document.getElementById("InputMail").style.color = "#484d52";

    if(validateEmail(document.getElementById("InputMail").value))
    {
        document.getElementById("Correct3").style.display = "inline-block";
        document.getElementById("InputMail").style.color = "#81c784";
        document.getElementById("InputMail").style.borderColor = "#81c784";
    }else{
        document.getElementById("Incorrect1").style.display = "inline-block";
        document.getElementById("InputMail").style.borderColor = "#ef5350";
        document.getElementById("InputMail").style.color = "#ef5350";
    }
}

Flip();Gallery();CloseGallery();Flip_phone();