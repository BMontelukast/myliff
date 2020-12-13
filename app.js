const form = document.querySelector('#register');
let userId = '';
async function main() {
 await liff.init({ liffId: "1654209143-W6aLAa0A" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
   }) 
 })
}
main();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userId);
    db.collection('users').doc(userId).set({
        hn : form.hn.value,
        name : form.name.value,
        surname : form.surname.value,
        personId : form.id.value,
        telNum : form.tel.value
    });
    
    liff.closeWindow();
});

