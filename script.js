// Add an event listener to the download button
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Create a new jsPDF instance
    var doc = new jsPDF();
  
    // Get the HTML content of the div
    var divContent = document.getElementById('right').innerHTML;
  
    // Generate the PDF from the div content
    doc.fromHTML(divContent, 15, 15, {
      'width': 170
    });
  
    // Download the PDF file
    // doc.save('test.pdf');
    doc.save('test.pdf');
    console.log(divContent)
  });
  

document.getElementById('Submit').addEventListener('click',KrijoCV)
function KrijoCV(){
    let CVInfo = {
        fullName:document.getElementById('fullname').value,
        
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        address:document.getElementById('address').value,
        city:document.getElementById('city').value,
        state:document.getElementById('state').value,
        postalCode:document.getElementById('postal').value,
        country:document.getElementById('country').value,
        proffesionalSummary:document.getElementById('summary').value,
        HLE:document.getElementById('highest-education').value,
        degree:document.getElementById('degree').value,
        institute:document.getElementById('institution').value,
        vitiDiplomimitit:document.getElementById('additional-completion-year').value,

    }
    document.querySelector('.name').innerHTML = CVInfo.fullName
    document.querySelector('.email').innerHTML = CVInfo.email
    document.querySelector('.phone').innerHTML = CVInfo.phone
    document.querySelector('.address').innerHTML = CVInfo.address
    document.querySelector('.city').innerHTML = CVInfo.city
    document.querySelector('.state').innerHTML = CVInfo.state
    document.querySelector('.postal').innerHTML = CVInfo.postalCode
    document.querySelector('.country').innerHTML = CVInfo.country
    document.querySelector('.summary').innerHTML = CVInfo.proffesionalSummary
    document.querySelector('.hle').innerHTML += CVInfo.HLE
    document.querySelector('.degree').innerHTML += CVInfo.degree
    document.querySelector('.institution').innerHTML += CVInfo.institute
    document.querySelector('.vitiDiplomimit').innerHTML += CVInfo.vitiDiplomimitit
    console.log(CVInfo)
merrFoton()
}
const input = document.getElementById("photo1")
    const output = document.getElementById("photo")
    let imagesArray = []

    let merrFoton = () => {
    const file = input.files
    console.log(file)
    imagesArray.push(file[0])
    displayImages()

}
function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image" class="userImage">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
  })
  output.innerHTML = images
}
function deleteImage(index) {
    imagesArray.splice(index, 1)
    displayImages()
  }

  let butoniPlus = document.querySelector('.insert')
butoniPlus.addEventListener('click',krijoDivin)
function krijoDivin(){
let divi = document.querySelector('div')
divi.innerHTML = `<h3>Job 2</h3>
<label for="job2-title">Job Title:</label>
<input type="text" id="job2-title" name="job2_title" required><br>

<label for="job2-company">Company/Organization:</label>
<input type="text" id="job2-company" name="job2_company" required><br>

<label for="job2-employment-period">Employment Period:</label>
<input type="text" id="job2-employment-period" name="job2_employment_period" required><br>

<label for="job2-responsibilities">Responsibilities and Achievements:</label>
<textarea id="job2-responsibilities" name="job2_responsibilities" rows="4" cols="50" required></textarea><br>`
document.querySelector('.job').appendChild(divi)
}