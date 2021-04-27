import Layout from "../../components/Layout/Layout";
import styles from './Country.module.css';

const Country =({country}) =>{

    return (
    <Layout title={country.name}>
        <div>
           <div className={Styles.overview_panel}>
               <img src={country.flag} alt={country.name}></img>

               <h1>
                   {country.name}
               </h1>
               <div>
                   {country.region}
               </div>

               <div>
                    <div className={Styles.overview_population}>
                        <div className={Styles.overview_value}>{country.population}</div>
                        <div className={styles.overview_label}>Population</div>
                    </div>

                    <div className={styles.overview_area}>
                        <div>{country.Area}</div>
                        <div> Area </div>
                    </div>
                </div>
               </div>
           </div>
    </Layout>
    );
};

export default Country;

export const getServerSideProps = async ({params}) =>{
    const res=await fetch(
        `https://restcountries.eu/rest/v2/alpha/${params.id}`
    );

    const country = await res.json();

return{
    props:{
        country,
        },
    };
};

