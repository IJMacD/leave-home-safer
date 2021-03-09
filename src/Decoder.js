import utf8 from 'utf8';

export default function Decoder ({ data }) {
    const preamble = data.substr(0, 14);
    const b64 = data.substr(14);
    const payload = JSON.parse(atob(b64));

    const { metadata, nameZh, nameEn, type, hash } = payload;

    const nameZH = utf8.decode(nameZh);

    return (
        <dl>
            <dt>English Name</dt>
            <dd>{ nameEn }</dd>
            <dt>Chinese Name</dt>
            <dd>{ nameZH }</dd>
            <dt>Type</dt>
            <dd>{ type }</dd>
            <dt>Hash</dt>
            <dd>{ hash }</dd>
        </dl>
    );
}