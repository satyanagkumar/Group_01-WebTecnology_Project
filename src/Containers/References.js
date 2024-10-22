import React from 'react'
import './reference.css';
const References = () => {
    const reference_array= [
        "A. Rakshe and N. Dongre, “Survey on security protocols for iot,” pp. 1–5, 2024.",
        "W. G. Hatcher, C. Qian, F. Liang, W. Liao, E. P. Blasch, and W. Yu, “Secure iot search engine: Survey, challenges issues, case study, and future research direction,” IEEE Internet of Things Journal, vol. 9, no. 18, pp. 16 807–16 823, 2022.",
        "J. A. Llopis, M. Mena, J. Criado, L. Iribarne, and A. Corral, “Towards a discovery model for the web of things,” pp. 96–103, 2022.",
        "R. Venkatesh and N. Malarvizhi, “Iot security and machine learning algorithms: Survey and analysis,” in 2023 7th International Conference on Trends in Electronics and Informatics (ICOEI), 2023, pp. 444–451.",
        "Z. Wang, D. Liu, Y. Sun, X. Pang, P. Sun, F. Lin, J. C. S. Lui, and K. Ren, “A survey on iot-enabled home automation systems: Attacks and defenses,” IEEE Communications Surveys Tutorials, vol. 24, no. 4, pp. 2292–2328, 2022.",
        "F. Antoniazzi and F. Viola, “Building the semantic web of things through a dynamic ontology,” IEEE Internet of Things Journal, vol. 6, no. 6, pp. 10 560–10 579, Dec. 2019.",
        "R. Pan and A. Ruiz-Mart´ınez, “Evolution of web tracking protection in chrome,” Journal of Information Security and Applications, vol. 79,2023, art. no. 103643",
        "R. Sardar and T. Anees, “Web of things: Security challenges and mechanisms,” IEEE Access, vol. 9, pp. 31 695–31 711, 2021.",
        "C. Aguzzi, L. Gigli, L. Sciullo, and A. T. Trotta, “From cloud to edge: Seamless software migration at the era of the web of things,” IEEE Access, 2020.",
        "R. Anarfi and K. K. Fletcher, “A reinforcement learning approach to web api recommendation for mashup development,” in 2019 IEEE World Congress on Services (SERVICES), Milan, Italy, 2019, pp. 372–373.",
        "C. Manta-Caro and J. M. Fernandez-Luna, “Ir.wot: An architecture and ´vision for a unified web of things search engine,” Sensors, vol. 24, no. 11, 2024, art. no. 3302.",
        "A. Laadhar, J. Dongo, S. Enevoldsen, F. Revaz, D. Gabioud, T. B. Pedersen, M. Meyer, B. Nielsen, and C. Thomsen, “Web of things semantic interoperability in smart buildings,” Procedia Computer Science, vol. 207, pp. 997–1006, 2022.",
        "H. Larian, A. Larian, M. Sharifi, and H. Movahednejad, “Towards web of things middleware: A systematic review,” arXiv preprint, Jan. 2022, available: https://doi.org/10.48550/arXiv.2201.08456",
        "T. Anees, Q. Habib, A. S. Al-Shamayleh, W. Khalil, M. A. Obaidat, and A. Akhunzada, “The integration of wot and edge computing: Issues and challenges,” Sustainability, vol. 15, no. 7, 2023, art. no. 5983.",
        "P. K. Sadhu, V. P. Yanambaka, and A. Abdelgawad, “Internet of things: Security and solutions survey,” Sensors, vol. 22, no. 19, 2022, art. no. 7433",
        "K. T. Chui, B. B. Gupta, J. Liu, V. Arya, N. Nedjah, A. Almomani, and P. Chaurasia, “A survey of internet of things and cyber-physical systems: Standards, algorithms, applications, security, challenges, and future directions,” Information, vol. 14, no. 7, 2023, art. no. 388",
        "P. Williams, I. Dutta, H. Daoud, and M. Bayoumi, “A survey on security in internet of things with a focus on the impact of emerging technologies,” Internet of Things, vol. 19, 2022, art. no. 100564",
        "J. A. Llopis, J. Criado, L. Iribarne, and N. Padilla, “A discovery pull model for devices in iot and wot environments,” in Proceedings of the 11th International Conference on the Internet of Things, 2021, pp. 228–233.",
        "H. Taherdoost, “Security and internet of things: Benefits, challenges, and future perspectives,” Electronics, vol. 12, no. 8, 2023, art. no. 1901.",
        "E. Velloso, D. Cardador, K. Vega, W. Ugulino, A. Bulling, H. Gellersen, and H. Fuks, “The web of things as an infrastructure for improving users’ health and wellbeing,” 2011.",
        "X. Su, E. Gilman, and X. Liu, “Towards semantic web of things: Reference architecture and gap analysis,” in 2023 IEEE International Conferences on Internet of Things (iThings), Danzhou, China, 2023, pp.151–158.",
        "A. Belhadi, D. Djenouri, Y. Djenouri, A. N. Belbachir, and G. Srivastava, “Social web in iot: Can evolutionary computation and clustering improve ontology matching for social web of things?” IEEE Transactions on Computational Social Systems, vol. 11, no. 3, pp. 3966–3977, Jun. 2024.",
        "V. Choudhary, S. Kumari, and R. Sharma, Web of things for smart city system, 2024",
        "A. Tzavaras, C. Tsinaraki, and E. Petrakis, “Api descriptions for the web of things,” in Proceedings of the 2024 Web of Things Conference, 2024, pp. 48–58.",
        "L. Sciullo, L. Gigli, F. Montori, A. T. Trotta, and M. D. Felice, “A survey on the web of things,” IEEE Access, 2022."
    ];
  return (
    <div className="reference-container">
            <ul>
                {reference_array.map((ref, index) => (
                    <li key={index}>[{index + 1}] {ref}</li>
                ))}
            </ul>
            <div className="note">
                <p>Note: For making the web-page more interactive taken the help of a Language Learning Model (LLM), which significantly improved the layout and user experience. The LLM also aided in understanding the methodologies and deriving clear insights from the referenced academic papers. Its application enhanced comprehension of complex topics, ensuring information is both accurate and accessible.</p>
            </div>
        </div>
  )
}

export default References
