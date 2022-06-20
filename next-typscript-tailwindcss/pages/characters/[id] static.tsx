import Image  from "next/image";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from '../../types';

function CharacterPage({character}: {character: Character}){
    return (
        <div className="flex flex-col gap-3 border-2 justify-center items-center p-2">
            <h3 className="text-xl text-slate-700 font-semibold">{character.name}</h3>
            <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width="200"
                height="200"
            />
        </div>
    );
}

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character"); // fetch the data from the API
  const { results }: GetCharacterResults = await res.json();

  return {
    paths: results.map((character) => {
      return {
        params: { params: { id: String(character.id)} },
      };
    }),
  };
}

export async function getStaticProps({params}: {params: {id: string}}) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const character: Character = await res.json();

    return {
        props: {
            character,
        },
    };
}

export default CharacterPage;