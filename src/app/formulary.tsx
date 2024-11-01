'use client';
export function Formulary() {
    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event);
      }
    return (
        <form onSubmit={submit} action="/api/services/posts/create" method="POST"
                className="flex flex-col gap-4 max-w-40">        
                <input type="text" name="title" placeholder="Title" />
                <textarea placeholder="Content" name="content" />
                <input type="file" name="arquivos"   accept="image/png, image/jpeg" /> 
                <input type="submit" value="Submit" />
            </form>
    );
}