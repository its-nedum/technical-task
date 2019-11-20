/*
* Declare the user qualification and save it in an applicant array
*/
let applicant = ['bike', 'driving_license'];

/*
* Initialize two empty arrays where the companies that the user can apply
* and can't apply will be saved
*/
let apply = [],
    cantApply = [];

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
* Display on the console the list of companies that the user can apply
* and can't apply
*/
console.log('You can apply here: ' + apply);
console.log('You can\'t apply here: ' + cantApply);
