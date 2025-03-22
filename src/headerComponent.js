

/*document.addEventListener('DOMContentLoaded', function (){
    const divElement = document.getElementById("yourDivId");
    const buttonElement = document.getElementById("yourButtonId");

    divElement.addEventListener("mouseover", function () {
        // در هنگام هاور بر روی دیو
        divElement.style.backgroundColor = "#fff300";
        buttonElement.style.backgroundColor = "black";
        buttonElement.style.color = "#fff300";
        divElement.style.color = 'black'
    });

    divElement.addEventListener("mouseout", function () {
        // در هنگام خروج از هاور بر روی دیو
        divElement.style.backgroundColor = "black";
        buttonElement.style.backgroundColor = "#fff300";
        buttonElement.style.color = "black";
        divElement.style.color = '#fff300'
    });
})*/

//this bottom function is component beacuse the first letters of  components are written with capital condition --> Sec is correct not -->sec
/*function Sec(){
      return <div className="columns">
    <div className="col" id={'yourDivId'}>
            <img src={require("./images/01.jpg")} width={"100%"} height={'446px'} alt="mmm"/>
            <h4>The Wallpapers</h4>
            <p>This Wallpapers are the most evaluated wallpapers because so many people search and follow this wallpapers to choose its phones wallpaper and we put this wallpapers in oublich till the people can use the wallpapers of our website  </p>
            <button id={'yourButtonId'}>Download This Wallpaper</button>
        </div>
        <div className="col" id={'yourDivId'}>
            <img src={require("./images/02.png")} width={"100%"} height={'446px'} alt="mmm"/>
            <h4>The Wallpapers</h4>
            <p>This Wallpapers are the most evaluated wallpapers because so many people search and follow this wallpapers to choose its phones wallpaper and we put this wallpapers in oublich till the people can use the wallpapers of our website  </p>
            <button id={'yourButtonId'}>Download This Wallpaper</button>
        </div>
        <div className="col" id={'yourDivId'}>
            <img src={require("./images/03.jpg")} width={"100%"} height={'446px'} alt="mmm"/>
            <h4>The Wallpapers</h4>
            <p>This Wallpapers are the most evaluated wallpapers because so many people search and follow this wallpapers to choose its phones wallpaper and we put this wallpapers in oublich till the people can use the wallpapers of our website  </p>
            <button id={'yourButtonId'}>Download This Wallpaper</button>
        </div>
      </div>
}*///this is function component
/*class Sec extends React.Component{
    render(){
        return <div className="columns">
            <div className="col" id={'yourDivId'}>
                <img src={require("./images/01.jpg")} width={"100%"} height={'446px'} alt="mmm"/>
                <h4>The Wallpapers</h4>
                <p>This Wallpapers are the most evaluated wallpapers because so many people search and follow this wallpapers to choose its phones wallpaper and we put this wallpapers in oublich till the people can use the wallpapers of our website  </p>
                <button id={'yourButtonId'}>Download This Wallpaper</button>
            </div>
            <div className="col" id={'yourDivId'}>
                <img src={require("./images/02.png")} width={"100%"} height={'446px'} alt="mmm"/>
                <h4>The Wallpapers</h4>
                <p>This Wallpapers are the most evaluated wallpapers because so many people search and follow this wallpapers to choose its phones wallpaper and we put this wallpapers in oublich till the people can use the wallpapers of our website  </p>
                <button id={'yourButtonId'}>Download This Wallpaper</button>
            </div>
            <div className="col" id={'yourDivId'}>
                <img src={require("./images/03.jpg")} width={"100%"} height={'446px'} alt="mmm"/>
                <h4>The Wallpapers</h4>
                <p>This Wallpapers are the most evaluated wallpapers because so many people search and follow this wallpapers to choose its phones wallpaper and we put this wallpapers in oublich till the people can use the wallpapers of our website  </p>
                <button id={'yourButtonId'}>Download This Wallpaper</button>
            </div>
        </div>
    }
}*///this is class component . react.js website suggests function component in compare with class component


// let myName = 'milad';
//we can use js in react like the top example in root element of JSX (check this example so carefully till you get it)

/*function kj(){
    return 'kiarash jenani rabaty is the best of world'
}*/
//we can use the functions which has been written JS in JSX into curly-brackets (check this ex so carefully out like the top one)

// let arr = [1,2,3,4,5,6];
//we can use also the arrays and its methods in JSX

// let element = React.createElement('h1', {} , 'kj is the best')
//we can create elements in react like js with createElement method , in first statement we assign , which element we wanna create in second statement we assign that our element which properties have and at the end statement we assign the innertext of this element that what is placed into

// let nested_element = React.createElement('div' , {className:'classs'} ,React.createElement('h1', {className:'HEADER1'} , 'kiarash'))
//we can use the nested elements in each other when we must do , for example we can do elements nested for 100 times

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(*/
    /*<React.StrictMode>
      <h1>kiarash jenani rabaty</h1>
    </React.StrictMode>*/
    /*2 elements with same type must be placed in other tag like h1 tags not a tag 2 or more tags must be placed in div tag but we have another
    choice like react.fragment tag like this bottom example:*/
    /*<react.fragment>
        <h1></h1>
        <h1></h1>
        <h1></h1>
    </react.fragment>*/
    //we can put <></> tags (indeed empty tags) instead <react.fragment> tags like this bottom ex:
    /*<>
        <h1></h1>
        <h1></h1>
        <h1></h1>
    </>*/
    //we use className attribute instead class bc the class attribute is reserved name in js so we write like this ex:
    /*<>
        <h1 className={}></h1>
        <h1></h1>
        <h1></h1>
    </>*/
    //the other rule of the JSX is , we must anyway close our tags even tags like area or input tags or we must put the f_slash in the end of input or area tags like this ex:
    /*<>
        <input type="text"/>
        <input type="text"></input>
    </>*/
    //when we wanna use two-syllabes tags that's consisted of 2 words like onclick or onaboard we must write the first part small and the first word of second part capital like onClick
    //we use the curly-brackets for importing the JS elements in JSX files ,by the way this element is defined above the root.render
    //we can also use the string's methods like .toUpperCase or .toLowerCase
    /*<>
    <h1>{myName}</h1>
    <h1>{2 * 2 * 2 / 4}</h1>
    <h1>{kj()}</h1>
    <h1>{arr.map(item => item ** 2)}</h1>
    </>*/
    ////-------> indeed we can write the JAVASCRIPTS codes  into curly-brackets in JSX<------------
    // element //------> this is the element which we created above the root.render in react
    // nested_element //-------------------------> we have a h1 with HEADER1 className in a div tag with classs className
    /*<>
    <header>kj's group</header>
    <section>
        <div className="row">
          <Sec></Sec>
          <Sec/>
        </div>
    </section>
    <footer>mother of kj roshanak</footer>
    </>*/
    //we have 2 types of components 1-function component 2-class component
    //the component in reactjs is like function in javascript with this difference that in component is returned html codes instead js codes
    //when we wanna use components we must write the name of component like html tags 1-<component name></component name> 2-<component name />

    //class component must be extended from react library and into that must be used from render method to run the code like the top example
    //we have another root component with the name root component that contains all components  and into that ,is written the JSX codes ,in fact we write the JSX codes in root component

//);