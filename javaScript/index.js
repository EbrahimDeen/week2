function addRow()
            {
                // get input values
                var fname = document.getElementById('fname');
                var lname = document.getElementById('lname');
                var age = document.getElementById('age');
                

                  
                  // get the html table
                  // 0 = the first table
                //   var table = document.getElementsByTagName('tbody')[0];
                 var table =document.getElementById('mytable').tBodies.item(0);
                        console.log(table);
                    // if(mytable.hasChildNodes()) {
                    //     var nodes = mytable.childNodes;
                    //     // Loop through node list and display node name
                    //     for(var i = 0; i <= nodes.length; i++) {
                    //         if (nodes[i].nodeName=='tbody') {
                    //             var table = document.getElementsByTagName('tbody')[0];
                                
                    //         }
                            
                    //     }
                    // }
                  
                  // add new empty row to the table
                  // 0 = in the top 
                  // table.rows.length = the end
                  // table.rows.length/2+1 = the center
                  var newRow = table.insertRow(table.rows.length);
                  
                  // add cells to the row
                  var cel1 = newRow.insertCell(0);
                  var cel2 = newRow.insertCell(1);
                  var cel3 = newRow.insertCell(2);
                  
                  // add values to the cells
                  cel1.innerHTML = fname.value;
                  cel2.innerHTML = lname.value;
                  cel3.innerHTML = age.value;
                  
               clearTxt(fname,lname,age);
}
function clearTxt(fname,lname,age){
    fname.value='';
    lname.value='';
    age.value='';
}