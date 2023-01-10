
// please install npm install react-apexcharts apexcharts
import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function Piechart()
{
   const [Username, setName]= useState([]);
   const [MoneySpent, setMoneySpent]= useState([]);

   useEffect( ()=>{
       const Uname=[];
       const UMoney=[];

            const getUserdata= async()=>{
            // const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
                        
            let EachSpendingsTotal= [
                {
                    user: 'a',
                    money: 5000
                },
                {
                    user:'b',
                    money: 8000
                },
                {
                    user:'c',
                    money: 9000
                },
                {
                    user:'d',
                    money: 4000
                },
                {
                    user:'e',
                    money: 8000
                }
                

            ]
            const resData= EachSpendingsTotal;       
            for(let i=0; i< resData.length; i++)
            {
                Uname.push(resData[i].user);
                UMoney.push(parseInt(resData[i].money));
            }
            setName(Uname);
            setMoneySpent(UMoney);
                //console.log(resData); 
            }

    getUserdata();

   },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart 
                type="pie"
                width={1349}
                height={550}

                series={ MoneySpent }                

                options={{
                        title:{ text:"Money SPent Pie chart"
                        } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:Username                     

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;