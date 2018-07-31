import * as Colour from '../service/colourProvider';

export const DashboardConfiguration = () => {
    return {
        view: {
            table: {},
            graph: {
                widgets: [
                    {
                        type: 'pie',
                        labels: ['Absenti', 'Voturi exprimate'],
                        keys: ['absentees', 'votes'],
                        label: 'Votanti',
                        multipleDatasets: false,
                        size: '4',
                        colour: Colour.getPrimaryColours().splice(1)
                    },
                    {
                        type: 'pie',
                        labels: ['Urban', 'Rural'],
                        keys: ['urban', 'rural'],
                        label: 'Impartirea pe mediu',
                        multipleDatasets: false,
                        size: '4',
                        colour: Colour.getPrimaryColours().splice(1)
                    },
                    {
                        type: 'pie',
                        labels: ['Barbati', 'Femei'],
                        keys: ['male_total', 'female_total'],
                        label: 'Impartirea pe gen',
                        multipleDatasets: false,
                        size: '4',
                        colour: Colour.getPrimaryColours().splice(1)
                    },
                    {
                        type: 'line',
                        labels: getAgeRange(18,95),
                        keys: ['male_votes_by_age', 'female_votes_by_age'],
                        label: ['Barbati', 'Femei'],
                        forcedLabel: 'Impartirea pe varsta si gen',
                        multipleDatasets: true,
                        size: '12',
                        colour: [Colour.getPrimaryColour(), Colour.getSecondaryColour()]
                    }
                ]
            }
        }
    };
};

const getAgeRange = (start, end) => {
    return [...Array(1+end-start).keys()].map(v => start+v);
};