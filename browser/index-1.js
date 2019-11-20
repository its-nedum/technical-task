/*
* Intialize my form fields
*/
let btn = document.getElementById('btn');
let req1 = document.getElementById('req1');
let req2 = document.getElementById('req2');
let showApply = document.getElementById('showApply')
let showCantApply = document.getElementById('showCantApply')

/*
* Initialize three empty arrays where the user qualification will be collected
* from the form and stored, companies that the user can apply and
* can't apply will be saved
*/
let applicant = [],
    apply = [],
    cantApply = [];

/*
* Once the button is clicked this event listener will be fired and the
* result will be displayed on the screen
*/
btn.addEventListener('click', () => {
    //Storing the form input into applicant array
    applicant[0] = req1.value
    applicant[1] = req2.value

/*
* Initialize each individual company requirement in an array and save
* them in all companies requirements array
*/
const allCompaniesRequirements = [
    companyA = ['house','property_insurance'],
    companyB = ['car','driving_license','car_insurance'],
    companyC = ['social_security_number','work_permit'],
    companyD = ['apartment','flat','house'],
    companyE = ['driving_license','car'],
    companyF = ['bike','driving_license','motorcycle_insurance'],
    companyG = ['massage_certificate','liabilty_insurance'],
    companyH = ['storage_place','garage'],
    companyI = [],
    companyJ = ['paypal_account']
];

/*
* Initialize each company name and save them in a companyName array
*/
const companyName = ['Company A','Company B','Company C','Company D','Company E','Company F','Company G','Company H','Company I','Company J'];

/*
* This checkCompany function uses switch case and if-else statement to determine whether
* the user meets a company's requirement and then take appropriate action
*/
const checkCompany = (companyRequirements, companyName) =>{
    switch (companyName) {
        case 'Company A':
            if(applicant.includes(companyRequirements[0]) && applicant.includes(companyRequirements[1])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company B':
            if(applicant.includes(companyRequirements[0]) && applicant.includes(companyRequirements[1]) && applicant.includes(companyRequirements[2])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company C':
            if(applicant.includes(companyRequirements[0]) && applicant.includes(companyRequirements[1])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company D':
            if(applicant.includes(companyRequirements[0]) || applicant.includes(companyRequirements[1]) || applicant.includes(companyRequirements[2])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company E':
            if(applicant.includes(companyRequirements[0]) && applicant.includes(companyRequirements[1])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company F':
            if(applicant.includes(companyRequirements[0]) && applicant.includes(companyRequirements[1]) && applicant.includes(companyRequirements[2])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company G':
            if(applicant.includes(companyRequirements[0]) && applicant.includes(companyRequirements[1])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company H':
            if(applicant.includes(companyRequirements[0]) || applicant.includes(companyRequirements[1])){
                apply.push(companyName)
            }else{
                cantApply.push(companyName)
            }
            break;
        case 'Company I':
            
                apply.push(companyName)
            
            break;
        case 'Company J':
                if(applicant.includes(companyRequirements[0])){
                    apply.push(companyName)
                }else{
                    cantApply.push(companyName)
                }
                break;
        default:
            console.log('Invalid entry')
            break;
    }
}

/*
* Call the checkCompany function declared above inside a For-loop
* passing it each individual company requirement and the company's name
*/
for(let i = 0; i < allCompaniesRequirements.length; i++){
    checkCompany(allCompaniesRequirements[i], companyName[i])  
};

/*
* Display on the browser the list of companies that the user can apply
* and can't apply
*/
showApply.innerHTML = "<span style='color:green'>You can apply here:</span> " + apply ;
showCantApply.innerHTML = "<span style='color:red'>You can't apply here:</span> " + cantApply;

/*
* Disable button to prevent performing action multiple times until
* page is refreshed
*/
btn.disabled = true;

})

