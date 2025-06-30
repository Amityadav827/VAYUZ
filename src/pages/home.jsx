// dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../assets/img/banner.png'
import Right from '../assets/img/right_image.png'
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // add this inside your imports


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
        transform: 'none',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Home = () => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const renderAccordion = (panel, title, content) => (
        <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
            <AccordionSummary
                expandIcon={expanded === panel ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`${panel}d-content`}
                id={`${panel}d-header`}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{content}</Typography>
            </AccordionDetails>
        </Accordion>
    );


    const navigate = useNavigate(); // use this inside your component

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const oldData = JSON.parse(localStorage.getItem('contacts')) || [];
        const updatedData = [...oldData, formData];
        localStorage.setItem('contacts', JSON.stringify(updatedData));
        alert("Form submitted!");
        setFormData({ name: '', email: '', phone: '' });
        navigate('/formDetails'); // redirect to submit page
    };



    return (
        <div>

            <div className='sec_app'>
                <h1>Securing Your Flutter App: Best Practices and Techniques</h1>
            </div>

            <div className='potential_flutter_main'>
                <div className='potential_flutter'>
                    <div className='potential_flutter_div'>
                        <h3>Unlock the Potential of Flutter</h3>
                        <p>Your Premier Partner for Cross-Platform App Excellence!</p>
                    </div>
                    <div className='tech_btn'>
                        <Link to="/Tech">Upgrade Your Tech</Link>
                    </div>
                </div>
                <div className='banner_img'>
                    <img src={Banner} alt="Banner" />
                </div>
            </div>

            <div className='flutter_dawn'>
                <div className='flutter_dawn_div'>
                    <h3>Flutter's Dawn</h3>
                    <p>History of flutter</p>
                </div>
                <div className='flutter_dawn_para'>
                    <p>Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey! <Link to="/">Click to begin!</Link> </p>
                </div>
                <div className='begin_btn'>
                    <Link to="/Begin">Begin</Link>
                </div>
            </div>

            <div className='dynamic_service'>
                <div className='dynamic_service_div'>
                    <h3>Our Dynamic Services Suite!</h3>
                    <p>Embrace Innovation: Let's Create Together!</p>
                </div>
                <div className='innovation_para'>
                    <p>Step into innovation! Explore our range of services and let's create something extraordinary together. <br /> Your vision, our expertise. Let's begin!</p>
                </div>
            </div>

            <div className='main_accordion_sec'>
                {/* Accordion Section */}
                <div className='accordion_sec'>
                    {renderAccordion('panel1', 'Flutter App Development', <>
                        Unlock endless possibilities with Flutter App Development. Build beautiful,
                        high-performance applications for any platform - faster and easier than ever before.
                        Ready to revolutionize your app experience? <Link to="/">Let's get started today!</Link>
                    </>)}
                    {renderAccordion('panel2', 'UI/UX Design', <>We create intuitive, engaging, and user-friendly designs that make your app stand out in the digital landscape.</>)}
                    {renderAccordion('panel3', 'Customization & Integration', <>Tailor-made solutions and seamless integrations to fit your exact business needs.
                    </>)}
                    {renderAccordion('panel4', 'Testing & Quality Assurance', <>Thorough testing and QA to ensure your application performs flawlessly.</>)}
                    {renderAccordion('panel5', 'Maintenance & Support', <>Ongoing maintenance and fast support to keep your apps running smoothly.</>)}
                    {renderAccordion('panel6', 'Consulting & Training', <>Expert consulting and in-depth training to empower your team.</>)}
                    {renderAccordion('panel7', 'Migration & Upgrades', <>Modernize legacy systems and upgrade your apps with minimal downtime.</>)}
                </div>
                <div className='accordion_img'>
                    <img src={Right} alt="" />
                </div>
            </div>


            <div className='connet_main'>
                <div className='menu_item'>
                    <div className='item_menuEvents'>
                        <ul>
                            <li>Events</li>
                            <li>Gen AI</li>
                            <li>Careers</li>
                            <li>Case study</li>
                            <li>SME Talks</li>
                        </ul>
                    </div>
                    <div className='connet_us'>
                        <p className='connet_us_para'>For any collaborative projects or enquiries feel free to connect with us.</p>
                        <p>vayuz.com</p>
                    </div>
                </div>

                <div className='form_main_div'>
                    <div className='form_div'>
                        <h3>Connect <br /> With Us</h3>
                        <form onSubmit={handleSubmit}>
                            <div className='form_details'>
                                <input type="text" name="name" value={formData.name} onChange={handleChanges} required placeholder="Full Name" />
                                <input type="email" name="email" value={formData.email} onChange={handleChanges} required placeholder="Email" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChanges} required placeholder="Phone Number" />
                            </div>
                            <div className='form_submit'>
                                <button type="submit">Submit</button> {/* ✅ NOT <Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='footer_menu_main'>
                <div className='footer_menu'>
                    <ul>
                        <li> <Link to="/">About</Link></li>
                        <li> <Link to="/">Insights</Link></li>
                        <li> <Link to="/">Community</Link></li>
                        <li> <Link to="/">Privacy & Policies</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;
