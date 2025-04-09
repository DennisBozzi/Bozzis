import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { selectResidences } from '@/services/residencesService';
import Residence from '@/interfaces/residence';
import Residences from '@/components/residences';

function ResidencePage() {
    const { name } = useParams();
    const [residence, setResidence] = useState<Residence | undefined>(undefined);
    const [residences, setResidences] = useState<Residence[] | undefined>(undefined);

    useEffect(() => {
        async function fetchResidence() {
            const res = await selectResidences();
            setResidences(res);
            const selectedResidence = residences?.find(x => x.name.toLowerCase() === name?.toLowerCase());
            setResidence(selectedResidence);
        }
        fetchResidence();
    }, [name]);


    if (!residences) {
        return (<>Carregando...</>)
    }

    return (<>{
        name ?
            <>
                <h1> {residence?.name}</h1>
                <p>{residence?.id}</p>
            </>
            :
            <Residences res={residences} />
    }</>);
}

export default ResidencePage;