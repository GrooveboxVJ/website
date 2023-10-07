// GLOBALS
const frogloop=document.getElementById('frogloop')
const nameinput=document.getElementById('nameinput')
const yourname=document.getElementById('yourname')
const btn_valider=document.getElementById('btn_valider')
const btn_back=document.getElementById('popupback')
// SECTION 2
const parcours=document.getElementById('frog')
const projets=document.getElementById('feet')
const contactme=document.getElementById('contactme')
// section 3
var thispage
const pagemin=1
const pagemax=5
const studies=document.getElementById('studies')
const experience=document.getElementById('experience')
const softskills=document.getElementById('softskills')
const hardskills=document.getElementById('hardskills')
const study=[
    {annee:'1989-2000',matiere:'CESI études générales',ecole:'Collège Saint-Michel'},
    {annee:'2001-2003',matiere:'CESS transition Arts',ecole:'Académie des Beaux-Arts'},
    {annee:'2004-2007',matiere:'Cinéma d\'Animation',ecole:'ENSAV la Cambre'},
    {annee:'2009-2010',matiere:'Journalisme',ecole:'IDJ'},
    {annee:'juillet 2019',matiere:'Gestion de Base',ecole:'Jury d\'Etat'},
    {annee:'2019-2022',matiere:'Mecanicien Moto',ecole:'EFP Bruxelles'},
    {annee:'avril 2023',matiere:'Business Intelligence',ecole:'Bruxelles Formation Digital'},
    {annee:'mai 2023',matiere:'Business Analysis',ecole:'Bruxelles Formation Digital'},
    {annee:'juin 2023',matiere:'Référencement SEO',ecole:'Bruxelles Formation Digital'}
]
const jobs=[
    {annee:'2010 - Now',fonction:'VJ (Groovebox VJ)',employeur:'Freelance',description:'Création de scénographies, video-mapping et contenu vidéo pour le secteur événementiel un peu partout en francophonie: Concert Noble, K-Nal, Tour & Taxis, Recyclart, Ateliers Claus, Cinéma Galeries, Fuse, Plastic Festival, Bruxelles-les-bains, Bulex, God Save the 90s, Get Mad, Lowup, Winey Winey, Rebel Up, L’Usine (Genève), Nocturnes ULB, Café Botanique, Audiorama Club Wood, Lotto Mons Expo, Belvédère Namur, RTBF Tipik, Gaming Corporation Belgium'},
    {annee:'2010 - 2019',fonction:'Foodtrucker',employeur:'Tofa Sprl',description:'(entreprise familiale) - spécialitésvietnamiennes - marchés etfestivals (Couleur Café, Esperanzah,Festival de Roncquières, Bruxelles-les-Bains, Plaisirs d’Hiver, SortilègeAth, Marché Gare du Midi, Marché deLouvain-la-Neuve...)'},
    {annee:'2009 - 2012',fonction:'Les Samedi d\'Anima',employeur:'Festival Anima',description:'animateur d’ateliers d’initiation à la création de film d’animation pour le festival Anima'},
    {annee:'2006 - 2010',fonction:'Storyboard et Animation 2D',employeur:'Freelance',description:'Pour divers clients'}
]
const softs=['Source d’innovation','Ouvert au changement','Génère des idées originales dans le cadre de contraintes','Spontané','Sait penser hors du cadre','Maitrise rapide des nouvelles technologies','Résout les problèmes avec méthodologie']
const hards=['Animation 2d et 3d','Montage Son et Vidéo','Post-Production','Diffusion en direct','Cuisine Asiatique','Mécanique Véhicules <3.5t','Business Intelligence','Business Analysis','Développement Web','Digital Marketing']
const logiciels=document.getElementById('logiciels')
const logiciels2=document.getElementById('logiciels2')
const logiciel=[
    {genre:'Graphisme',liste:[
        {nom:'Adobe Photoshop',maitrise:5},
        {nom:'Adobe Illustrator',maitrise:5},
        {nom:'Adobe Indesign',maitrise:5}
    ]},
    {genre:'Video et Animation',liste:[
        {nom:'Final Cut Pro',maitrise:5},
        {nom:'Adobe Premiere',maitrise:5},
        {nom:'Adobe After Effects',maitrise:5},
        {nom:'Adobe Animate',maitrise:5},
        {nom:'Blender 3D',maitrise:2}
    ]},
    {genre:'Live Processing',liste:[
        {nom:'Isadora',maitrise:5},
        {nom:'Touch Designer',maitrise:4},
        {nom:'MadMapper',maitrise:5},
        {nom:'Modul8',maitrise:5},
        {nom:'Resolume',maitrise:5},
        {nom:'Ableton Max',maitrise:5}
    ]},
    {genre:'Developpement Web',liste:[
        {nom:'HTML',maitrise:5},
        {nom:'CSS',maitrise:5},
        {nom:'Javascript',maitrise:5},
        {nom:'Node JS',maitrise:4},
        {nom:'PHP',maitrise:2},
        {nom:'Wordpress',maitrise:5}
    ]},
    {genre:'Business Intelligence',liste:[
        {nom:'SQL',maitrise:5},
        {nom:'MS Power BI',maitrise:5},
        {nom:'MS SSIS',maitrise:4},
        {nom:'MS SQL Server',maitrise:4},
    ]},
    {genre:'Business Analysis',liste:[
        {nom:'UML',maitrise:5},
        {nom:'BPMN',maitrise:5},
        {nom:'Cawemo',maitrise:5},
        {nom:'Balsamiq',maitrise:5},
    ]},
    {genre:'Référencement SEO',liste:[
        {nom:'SemRush',maitrise:4},
        {nom:'Google Analytics 4',maitrise:4},
        {nom:'SEO Spider',maitrise:5}
    ]},
    {genre:'Langues Parlées',liste:[
        {nom:'Français',maitrise:5},
        {nom:'Anglais',maitrise:5},
        {nom:'Néerlandais',maitrise:2},
        {nom:'Vietnamien',maitrise:5}
    ]},
]
const leftarrow=document.getElementById('left')
const rightarrow=document.getElementById('right')
// SECTION 4
const grille=document.getElementById('grille')
const portfolio=[
    {nom:'SFV Scoreboard for OBS',
     image:'./portfolio/sfvscoreboard.png',
     description:'Un plugin OBS de scores pour la diffusion de tournois de Street Fighter 5 (textes en français, anglais et italien).',
     couleur:'#2E86AB',
     url:'https://github.com/GrooveboxVJ/SFVscoreboardOBS',
     url_desc:'github'},
     {nom:'Amour à Distance (HTML Game)',
     image:'./portfolio/amourdistance.png',
     description:'Typing game créé pendant la "Game Jam Poétique: Dix mots à tous les temps" organisée par l\'association bruxelloise "Slameke"',
     couleur:'#F6F5AE',
     url:'https://amourdistance.vercel.app/',
     url_desc:'site web'},
     {nom:'Super Karaoke Turbo Edition',
     image:'./portfolio/karaoke.gif',
     description:'Application de Karaoke avec intégration OBS pour le streaming. Reconnaissance automatique des titres via l\'API Deezer. L\'interface de type spotify rend la prise en main très intuitive',
     couleur:'#F5F749',
     url:'https://www.linkedin.com/posts/tan-hoa-pham_vous-aimez-le-karaoke-petit-zoom-sur-activity-7081945918182170626-1mmX?utm_source=share&utm_medium=member_desktop',
     url_desc:'linkedin'},
     {nom:'Bongo SFV for OBS',
     image:'./portfolio/bongoMika.gif',
     description:'un Avatar de streaming contrôlé avec la voix et la manette PS4',
     couleur:'#92BEAD',
     url:'https://twitter.com/GrooveboxVJ/status/1625430231606517761',
     url_desc:'twitter'},
     {nom:'Hadokamp Online Tournament',
     image:'./portfolio/hadokamp.gif',
     description:'Développement d\'overlays dynamiques, transitions video, écrans de statistiques et scoreboard pour les tournois online Hadokamp (Street Fighter V)',
     couleur:'#F35348',
     url:'https://www.start.gg/tournament/brussels-challenge-major-edition-2023/details',
     url_desc:'youtube'},
     {nom:'Brussels Challenge Startgg homepage',
     image:'./portfolio/bxlchallstartgg.png',
     description:'Développement du site d\'inscription pour le tournoi esports Brussels Challenge Major Edition 2023 à Tour&Taxis',
     couleur:'#F24236',
     url:'https://www.youtube.com/watch?v=Lh8XS1UhkM8',
     url_desc:'site web'},
     {nom:'Brussels Challenge Streaming Overlays',
     image:'./portfolio/bxlchall.png',
     description:'Développement d\'overlays dynamiques et d\'un scoreboard pour la diffusion du tournoi esports Brussels Challenge Majour Edition 2023 à Tour&Taxis. Les data des 600 participants et 14 tournois sont recueillis automatiquement via des requetes API',
     couleur:'#565554',
     url:'https://www.linkedin.com/posts/tan-hoa-pham_so-i-was-asked-to-create-all-the-displays-activity-7087817823296638979-ANzq?utm_source=share&utm_medium=member_desktop',
     url_desc:'linkedin'},
     {nom:'Site web Pong Studio',
     image:'./portfolio/pongstudio.png',
     description:'Développement du site web pour le studio de doublage Pong Studio',
     couleur:'#C4DAAE',
     url:'https://pongstudio.be',
     url_desc:'site web'},

]
// FUNCTIONS
const addStars = (stars) => {
    let result=''
    for (let i=0;i<stars;i++){
        result=result+`<img src='./assets/star.png' class="star">`
    }
    for (let j=0;j<(5-stars);j++){
        result=result+`<img src='./assets/blackstar.png' class="star">`
    }
    return result
}
const fillLogiciels = () => {
    for (let i=0;i<logiciel.length;i++){
        let output
        if (i<4) output = document.getElementById('logiciels')
        if (i>=4) output = document.getElementById('logiciels2')
        let h3=document.createElement('h3')
        h3.innerHTML=`${logiciel[i].genre}`
        output.appendChild(h3)
        let ul=document.createElement('ul')
        
        for (let l=0;l<logiciel[i].liste.length;l++){
             let li=document.createElement('li')
             li.innerHTML=`${logiciel[i].liste[l].nom} - ${addStars(logiciel[i].liste[l].maitrise)}`
             ul.appendChild(li)
        }
       output.appendChild(ul)
    }
}
const fillSofts = () => {
    for (let i=0;i<softs.length;i++){
        let li=document.createElement('li')
        li.innerHTML=softs[i]
        softskills.appendChild(li)
    }
}
const fillHards = () => {
    for (let i=0;i<hards.length;i++){
        let li=document.createElement('li')
        li.innerHTML=hards[i]
        hardskills.appendChild(li)
    }
}
const fillStudy = () => {
    for (let i=0;i<study.length;i++){
        let p = document.createElement('div')
        p.classList.add('line')
        p.innerHTML=`<div class='annee'>${study[i].annee}</div><div class='matiereecole'><div class='matiere'>${study[i].matiere}</div><div class='ecole'>${study[i].ecole}</div></div>`
        studies.appendChild(p)
    }
}
const fillExpe = () => {
    for (let i=0;i<jobs.length;i++){
        let job = document.createElement('div')
        job.classList.add('job')
        job.innerHTML=`<div class='annee'>${jobs[i].annee}</div><div class='jobcontent'><div class='jobfonction'>${jobs[i].fonction}</div><div class='jobemployeur'>${jobs[i].employeur}</div><div class='jobdescription'>${jobs[i].description}</div></div>`
        experience.appendChild(job)
    }
}

const showGridunit = (clicked) => {
    if (clicked){
    let gridunits=document.querySelectorAll('.gridunit')
    gridunits.forEach(gridunit =>{
        gridunit.classList.remove('actif')
    })
     document.getElementById(gridunits[clicked].id).classList.add('actif')   
    }
    
}

const fillGrid = () => {
    for (let i=0;i<portfolio.length;i++){
        let div=document.createElement('div')
        div.classList.add('gridunit')
        div.id=`gridunit${i}`
        div.innerHTML=`<div class="projetnom" id="projetnom${i.toString()}">projet ${i}:\\\\ ${portfolio[i].nom}</div><div class="projetimage"><img src="${portfolio[i].image}"></div><div class="projetdescription"><div class="descr">Description:</div>${portfolio[i].description}</div><div class="projeturl"><a href='${portfolio[i].url}' target="_blank">${portfolio[i].url_desc}</a></div>`
         grille.appendChild(div)
         document.getElementById(`gridunit${i}`).style.borderLeft=`20px solid ${portfolio[i].couleur}`
    }
    document.getElementById(`gridunit0`).classList.add('actif')
    let gridunits=document.querySelectorAll('.gridunit')
    gridunits.forEach(gridunit => {
        gridunit.addEventListener('click',(event)=>{
            let clicked=event.target.id.slice(-1)
            showGridunit(clicked)
        })
    })
}

const showBackBtn = () => {
    btn_back.style.display='flex'
}
const removeBackBtn = () => {
    btn_back.style.display='none'
}
const resetLoop = () => {
    document.getElementById('popupfrog').style.display="flex"
    frogloop.src = frogloop.src
}
const goSection = (section_id,class_id) => {
    let allsections = document.querySelectorAll('section')
    allsections.forEach(element => {
        element.classList.remove(class_id)
        element.style.display="none"
    });
    document.getElementById(`s${section_id}`).style.display="flex"
    document.getElementById(`s${section_id}`).classList.add(class_id)
    if (section_id>2) {
        showBackBtn()
     } else {
        removeBackBtn()
     }
   
}
const removeNameInput = () => {
    setTimeout(()=>{       
        nameinput.classList.add('fadeout')
    },3000)
    setTimeout(()=>{
        nameinput.remove()
        goSection(2,'fadein')
    },5000)
}
//carroussel
const hideAllcontents = () => {
    let contents=document.querySelectorAll('.content')
    contents.forEach(content =>{
        content.style.display="none"
    })
}
const showAllcontents = () => {
    let contents=document.querySelectorAll('.content')
    contents.forEach(content =>{
        content.style.display="flex"
    })
}
const showContent = (page) => {
    let content = document.querySelector(`#page${page}`)
    content.style.display='flex'
}

const carroussel = (page) => {
    thispage = page
    hideAllcontents()
    showContent(page)
    leftarrow.classList.remove('inactif')
    rightarrow.classList.remove('inactif')
    if (page==pagemin) leftarrow.classList.add('inactif')
    if (page==pagemax) rightarrow.classList.add('inactif')
}
leftarrow.addEventListener('click',()=>{
    if (thispage>1) carroussel(thispage-1)
})
rightarrow.addEventListener('click',()=>{
    if (thispage<pagemax) carroussel(thispage+1)
})

//FILL
fillLogiciels()
fillSofts()
fillHards()
fillStudy()
fillExpe()
fillGrid()

// EVENTS
btn_valider.addEventListener('click', ()=>{
    if (yourname.value){
    yourname.style.color="red"
    resetLoop()
    removeNameInput()
    document.title=`Bienvenue ${yourname.value} !`
    }
})
btn_back.addEventListener('click',()=>{
    goSection(2,'fadein')
})
parcours.addEventListener('click', ()=>{
    goSection(3,'bouncein')
    carroussel(1)
})
projets.addEventListener('click', ()=>{
    goSection(4,'bouncein')
    showAllcontents()
})
contactme.addEventListener('click',()=>{
    goSection(5,'bouncein')
    showAllcontents()
})
// START
goSection(1)