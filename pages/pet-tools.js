import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function PetTools() {

    function processClicked(){
        var inputElement=document.getElementById("transactioninput")
        var inputText=inputElement?inputElement.value:""
        console.log("inputText: "+inputText);

        var outputElement=document.getElementById("transactionoutput")
        if (outputElement){
            outputElement.value = inputText
        }
    }

    return (
        <div className={styles.container}>
            <div id="input ">
                <h2>Transactions:</h2>
                <textarea id="transactioninput" name="transinput" rows="30" cols="80"></textarea>
            </div>
            <div id="button">
                <button className={styles.buttontransaction} onClick={processClicked}>Process!</button> 
            </div>
            <div id='output'>
                <h2>Output:</h2>
                <div id='outputbox'>
                    <textarea id="transactionoutput" name="transoutput" rows="30" cols="80"></textarea>
                </div> 
            </div>
        </div>

    );
}