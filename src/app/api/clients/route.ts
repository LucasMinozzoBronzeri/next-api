import { Client } from '../../interfaces'

const clients: Client[] = [
    {
        name: 'Lucas Minozzo',
        address: 'Rua da rua'
    },
    {
        name: 'Marcelo Galli',
        address: 'Rua da rua'
    },
    {
        name: 'Diego Costa',
        address: 'Porto Alegre'
    }
];

export function GET(){
    return Response.json(clients);
}

export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;

    clients.push({
        name,
        address,
    });

    return Response.json({status: "Added"});
}