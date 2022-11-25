
const porcent_1_option = document.querySelector(".porcent_1_option");
const number_1_option = document.querySelector(".number_1_option");

const result_1_option = document.querySelector(".result_1_option");
const button_1_option = document.querySelector(".button_1_option");

const value_2_option = document.querySelector(".value_2_option");
const number_2_option = document.querySelector(".number_2_option");

const result_2_option = document.querySelector(".result_2_option");
const button_2_option = document.querySelector(".button_2_option");

const value_3_option = document.querySelector(".value_3_option");
const number_3_option = document.querySelector(".number_3_option");

const result_3_option = document.querySelector(".result_3_option");
const button_3_option = document.querySelector(".button_3_option");

const value_4_option = document.querySelector(".value_4_option");
const number_4_option = document.querySelector(".number_4_option");

const result_4_option = document.querySelector(".result_4_option");
const button_4_option = document.querySelector(".button_4_option");


const calc_porcent_1_option = (porcent, number) => {

    const result = Number(porcent) / 100 * Number(number);

    return result; 

}

const calc_porcent_2_option = (value, number) => {

    const result = Number(value) / Number(number) * 100;

    return result;

}

const calc_porcent_3_option = (number, value) => {

    const addition_or_decrease = Number(value) - Number(number);
    const result = calc_porcent_2_option(addition_or_decrease, Number(number));

    return result;

}


button_1_option.addEventListener("click", () => {

    result_1_option.innerHTML = `
    
        <span>${calc_porcent_1_option(porcent_1_option.value, number_1_option.value)}</span>
    
    `;

});

button_2_option.addEventListener("click", () => {

    result_2_option.innerHTML = `
    
        <span>${calc_porcent_2_option(value_2_option.value, number_2_option.value)}</span>
    
    `;

});

button_3_option.addEventListener("click", () => {

    result_3_option.innerHTML = `
    
        <span>${calc_porcent_3_option(value_3_option.value, number_3_option.value)}</span>
    
    `;

})

button_4_option.addEventListener("click", () => {

    result_4_option.innerHTML = `
    
        <span>${calc_porcent_3_option(number_4_option.value, value_4_option.value)}</span>
    
    `;

})




