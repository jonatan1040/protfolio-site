const data = [{
        image: 'https://seekvectorlogo.net/wp-content/uploads/2019/11/afcon-vector-logo.png',
        title: 'Project Manager',
        compeny: 'Afcon Software & Electronics',
        location: 'Petech Tekva',
        Star_Date: 'November 2017',
        End_Date: 'July 2019',
        Description: 'Project Manager. High and Low Voltage Power System Engineer. troubleshooting & fixing industrial facilities power systems. yearly check and approve of large facilities like skyscrapers, hospitals, malls, servers farms etc. ABB certificate of handling and fixing circuit breakers.',
        link: ''
    },
    {
        image: 'http://www.or-star.co.il/templates/shaper_macro/images/presets/preset1/logo.png',
        title: 'PO-project manager',
        compeny: 'Or-Star',
        location: 'Irus',
        Star_Date: 'May 2013',
        End_Date: 'November 2017',
        Description: 'project manager at Or-Star, Or - Star is an apps and websites design and development company. responsibility on clients, deadlines, product characterization, functionality and projects teams. worked with IOS, Android, Joomla, Magento, WordPress, html, css, UI / UX, design, sql, DB, CPanel, Jira, MS Project.',
        link: 'http://www.or-star.co.il/'
    },
    {
        image: 'https://www.eyesight-tech.com/wp-content/uploads/2019/03/Eyesight-Logo-Blue-Black.png',
        title: 'QA Engineer',
        compeny: 'eyeSight Technologies',
        location: 'Herzeliya',
        Star_Date: 'February 2013',
        End_Date: 'May 2013',
        Description: 'QA test and many more',
        link: ''
    },
    {
        image: 'https://3gwtod2hg0th1ikege3y0nok-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/57247_Checkpoint-Logo.jpg',
        title: 'QA Engineer',
        compeny: 'Check Point Software Technologies',
        location: 'Tel Aviv',
        Star_Date: 'June 2011',
        End_Date: 'November 2012',
        Description: 'Deep understanding in networking with an emphasis on security. Experience with Checkpoint products. Knowledge with various OS: Linux, Unix, Splat, Windows Servers OS, IPSO. Experience with VMware & ESX. Test writing, planning&executing. Debugging. Installing & operating server room. Performed Functional, System Integration, GUI and Regression testing. Provide consultation to other QA teams about my team product which was VPN networks.',
        link: ''
    },
    {
        image: 'https://u.partner.co.il/media/1992/logo.png',
        title: 'Technical Support Specialist',
        compeny: 'Orange Israel',
        location: 'Rosh Hayen',
        Star_Date: 'January 2009',
        End_Date: 'August 2010',
        Description: 'Installation of network and telephony equipment including all types of Routers, AP, Dongles, VOIP for home and business. spatial perception and understanding of network topology without seeing the installation area. Service to customers. Treatment Malfunctions',
        link: ''
    }
];

const divs = document.querySelectorAll('figure div');
for (let i = 0; i < divs.length; i++) {
    let image = divs[i].querySelector('img');
    image.setAttribute('src', data[i].image);
    let para_first = divs[i].querySelector('.first');
    para_first.innerHTML = data[i].compeny;
    console.log(para_first);
    let para_last = divs[i].querySelector('.last');
    para_last.innerHTML = data[i].title;
}