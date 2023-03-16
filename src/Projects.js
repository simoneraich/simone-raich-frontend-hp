import React from 'react';
import backgroundImage from './background.png';

import './Projects.css';

export default function Project() {
return (
    <div className="background-image">
      <h3 className="ProjectsHeader">Skills I picked up along the way:</h3>
      <div className="Projects" style={{ display: "flex" }}>
        <div className="ProjectCards" style={{ flex: 1 }}>
          <h3 className="ProjectHeading">Weather App</h3>
          <a className="UsedSkills React">React.js</a>{" "}
          <a className="UsedSkills API">API</a>{" "}
          <a className="UsedSkills Node">Node.js</a>{" "}
          <div className="ProjectImg">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRYYGRgYGhgcGBwYGhwZGhwaGhgaGRgZGhoeIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADsQAAIBAgQDBgMGBQQDAQAAAAECAAMRBBIhMQVBUSJhcYGRoQYysRNCUnLB0RRiouHwFZKy8SMzggf/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEAAgMBAQEBAAAAAAAAAAABAhESITFBA1Ei/9oADAMBAAIRAxEAPwDS4hiRlbfK2m+xOmkLTZQBl2UWtMziBtURE2Vu1c30tv6zcSiMgsOegG9+pnOXZZoLtgqQLXN/KbOBYneZdYuAPIeAl3CPZTeXG6rNaoEREFhCStzD2nTaBul1tKOJayiaI2lDEDS3fFEuhhgNhIjRRDqLkQCUxC5YyCEAlEbR7SVorQI2j2krRWgNaNlk7RWgRtFaTtFaBC0VpO0VoEbRrQlorQB5YssJaLLAFliywuWNlgCKxisKRIlYAisiVhSsYiAErIlYYiBqOBAhligmxUUmx57hnznPmGQgWF+0VB1J6Xm3hsUXOVFK5SPMTlqtbPUTJ2EYAM9rC19ROl4ThxnLq4ZeQB8heeeO2Ua9VG0AFxzMslhsRGQG17/9wC3LjMdp08c2nSew8Jb5SkgJNzt0ly+k3GUVOtpUqIftAvKxMsDQxG2cHuMACLqB0JljDjcyFJLs55CHw40iA6LJSLvYSutY63mtgiVrtaWLTKwzkue6ayyS7CtFaStFKGtFaJ3ABJ0ABJ8BqZx3F+NPaoM/yvRrUSumekSt177Enfoekly01jjcnZWimJ8PYwu+IGYsv2gdCdexUQMAO4dJtyy7LNXRRRRQyUUUUNFFFFAUeNHgNaDdrSvxHGimpPPlMvg3FzWWzKVY8mEzcpLpON1trmrt3xVKlhGRbyviaZ1Il2gQxBKm/lMLBcXz6MdSWyjckAzD4jxyvRd1UZlXMeoIt6iZnA3qq1Oo2VU7YDDtG5HMW23nPlvtvi9BzL1imNT4klha0UconFSo8NyujVAamXewsgPKy31m5hqV/uhF35Am0y+E8SxFQrejZcpPaIB7iRNfFUKhQkhFa3MkzlHTIYZScqtraWcLhFUb3PMzlcDgqqFSXD31PK3cO6bmGqupA63J1mscpvtm4tlaYMkVtB4drmWWnaMqlcEa9I3O/deExI0MEinOByteQToHQ9+phqSysi797H0lssFEsEHYXtzld97SdAm5N+clUYGQAwy2uT1mjh6lxKFBd+YlnDPrptLjRcijxTQZlBFjsdD4TyH4hrGi/wDDutzTYqjH8DdpR3jW4H8zT1XiNEvTdFfIzKQrA2IPI+s8l+KcZ9sKYcEYhL06hI+bIbo9+TA5ges55Ov4p/DPxI9CoTuNnTqAeXQjlPWsJikqIrobqwuD+njPBEUq4YjoD4/9Trvgn4mak32Ti6Ziup+Ujci+nlzjG/F/WTW/r1OKDSsp2O+0LOjiaKKKAooooCiMV48DnuJYlQxZr9kEgeErcEqIzl7bjXuudvGN8UUzZnUfKDe3MTI+G07PzjKdW6noN9OU8dysyd+M4u3DixmXxLiq00YtoApbxty8YbB10KE5uonLcZQV6VTtXZM2VQd+gI6Ttln1NOUx7c78SIKrF0qBGcDKl/mvYWMyaq1sIPs2bcbLdrXNr9BJYLDl2yFFzq1zc207jbeaHG+PojImHuXXR84zXYEWA6+Uk/i1p0+G07Dt8huBfbnpFMPF/FLZjnCBtLjIdDYd8UnGm3d8IwrLUdxcLYKAeVv+4fiBZbHfmddNJzHC+NVnps6re7kgX5cvpJjj5YFapy8tPpMfNN6721sDic7MDzGvhyhrkuATYKPUTHwXFqYdRe19GPnC4jGZ6jIuqqL37v8APpMeLrt1HCql9bzXYzz7D8fSnftjQ/Saq/GFHQZt7TrjnqdueWPbrWAMr0b5mvytaZ+G4qrkhWFxaEXGgM1zzE3zicas4YEkk7XNoao8z8Pj1bVdQDqR1ksRigtyTuPSOc0cVxEABMrNWsOsyX+I6ORgrgmxmHh/iMqddeUzln/CYuzoYgBSTpeQo41Vc66TlavGQ6DKdeYMrUeIksL6+GpmL+l+Lxj0P+PTLmvMvE8ZABN7DlMCpi2ZTkVvQzmcfxN7lGuLHnpNzPK+LwjpfiT4hqqlqFjcdtge2v5Vtt3icHjcSpRXWo7u5Y1Q62IOmUq2txvzvtD1a7jtWa3Wxt6ylisrm+x59/lHf10xyxxmgBVbe/rGw2JOZgNzYjTmbCIJbciDqVAjK9rW08RNY3VXKco9J+DuPGwpVb2GiMdbfysZ3pxQtfeeQYDFaAidVh+Jt9mWB+UXYfyjcjw+kvP65X89OwXGkta2kp4/iwQjW0x8Nx+m4DA63tac/wAc4sj1QmbskjN3TGX6WzUSY99u5biH0vpDUsb/AONnJ2BPpOIqcYRKipn0tvvp0gsJ8RK9OsGbLZrX52PQf5vM88vWuMdZT4zl7T/KbW6wuJ4+mU5SNt/rPMuK/EH2ihFHyto3MgXtFQxQKC5JPPXaYtzk9bmONrT41xutZgt8uoI7usxMDx7I6WsBsw5aneLG8QUKwLEuo0I2OnP/ADrOcxD5mzHS9prDDc7TK6vT0bHcaFN3sLqyqVPIsRv9Jy+NxT0qjuzXDJ902Fztcc5o8TxyJhkUWLtdLnvBtf29JyXG0dHyM2bsrqD1EuGO0yulOriSHzXN97gyaYq6sbXa4ObmNZQYx1a076chatZmJJYkneKBvHlHd/DvFfsafaAAzX8jKWNoHOahIys2a19ddtJz32p2vvC/aHmTOfDV23y6aVTFDVQedwY7cSe3ZYjTKbHeZmeNfSXjGOVH+0MMlWUw8l9pLpNt7A8Van2lazDaCxHG6rlszntbzFD6yTGTjDlXRcF+JHw6Oii+Y31jY7j9aoe01u4bTBUwiGOE9OVW6bm+8IlYjSU0NjDB4sNtHDVr87W3PcNSZSfj7ZiKZKIOf3m778vASpxGtkplQdX3/L/gmMraRjhPW96d/wAK4+1RbFjmA68paDlioZgqrcnKO07EWuxv533OmvXzrDYpkIZDY7eI6TrsPjCygkW0EmU06YayaOMoowJzuRYjKNDqQb31B1X3mHjcC6dvVkOuYD5dbWf8J+t9Jq/xK2veVamPADMPlIdAD94spUjwAa58hzklXLGWbY71hy5i3uD+kDiO0LdNbeEhWW0Fmm9OUys6bnDq10RuoF/EaH3E6LAYortObwmGdUzkWVtVHM/zW6GW6Fe05eV39xF4qn2DXS+R7sndb5l8rjyInN4jFMWJJ1M6V+IUqiNSe/IqR8ym9rjyJ0nMcSwj0nyt4qeTDqP25TpjJ64ZdXRJiTuTIrWN7ysGkg03pna4le2sOMQcp75mB5L7XSZuLUy0lWrQWe9oJzGzS6ZW8biS5zMb7W8pTq1C25v4xM+kGTLIIxRwIiIEYo8UC1Jq0iMw6xCsegPiI0g6tIu0itVea+hMldD+IehjQiHj/aSX2SHZ/UGIYQ/ddD52+saEQ8mHk0wL/hv4EH9Y74V1tdDqL7X+kCOaOHgypkgsCyjwqPfSUkaXcGLnw/SZqRR4y92sOWnpvKPKTxT3Ynx9zBOZZ46UfCVFVrsCR3cpu4XHowFMEnUdp226BROavGR7HSS47XHK4uzTANfVtIL4goFUpOBp20PcwIYeoP8ATC8ExhZQrqbdddNrXPrNkYNH7FQZkDK46EgEAHnbU3nKf5y7dcv9Y9OYwPB6tVM5sicnc2B/KBq3kLd800+HKVMCo9bOFPy5Moa3InMdOs6So6G10DW0GbUADYBR2QO60T1wRYhbdAqgelpu5WsTGRy9Xiaudd/DTaBqK/3EY37rD3m/UdAbgKD3AAwNTFqOcxp13dMTB8IbNnqnL3A6+vKXeJZHw7oSSVBZGbcMovoe8DL6dIDFYq+p2mHjccX7N+z3c50x3XPLipR7xKO+LLOjgbPEzCMVkJFMxkAZNlkZQ5EiRHMYmQKRJjExXgKKNeKBYRyNjJrUPMA+IlwqjfMpU9V/aMeHA6o4buOhl8RWzpzUjwMkiIdnt4iRq4Z1PaUjy0jinfUSGhhhT91lbwP7xPh3G6keUSUg2gOvOOtR02Zh1F5Qyi1/aEwdRwbB2A7iYzYxyRmCtprmEs4evSDHNT/2sdPAGWgjY6oLA2Yfzqp0i/il0DUUP5bp9DI1BTci1S1uTrb3EVTAVGN0s427DA+28gmKuGOhSon5SGHuIRlpBHKVCSFNlKW97ylUwhQ9oEeIIksWcqW5mwmKuM7Y7anzkXhCNfImCc6+crVK+8Lw/Ds7hQbE8+g6yu202fhcDOxO4At5k3+gkyuoYzdkdRgOHJRGbM5P8zEj/bt7Qxx/SQdyRKlRTOMu3p1JFw46AfGmU275CnULnKgBOtrkC5HIX5/vNMWiVajczKpqG9hqZeXhrOLh83cLAg8wy3zAjobGP/pxTdGHeVI+s3MXO/pPjGx9OoxsbASg2FYbzQx+ctpeUs7bTo522ghCdo5oPvYySsRCpXYQKjKw3BkOc0Ud3OUfSGqcNdiL2EIyfGSapNxeFrbW14N+DryMptgsTGDTTbhzHntAvgGEmqbigTGEsPhmHKBZD0k0ptIo1ooF6hijsReW1fulChTUjex75oJhyBbMfPUeRmtoMmMK6XuOh1EImLonR0t3pKi0xc3FrDcawjYc2utmHdIqwcKjm9JyPzSriMJUU3K3HVdRIIfaXaGPddA1x0bWE0yHbWOtTQ9831q0H/8AZTsfxLIf6FTf/wBVUX/C3+XktNMdagAv3SNN7czfu0lnFcFrpfsFh1XX+8oKCNGBB6HSNmmrh+I1V0Dkjo2o94Pi+IzFeyAQNbC1yeZ9ILDUxfXlqfCVcRVzsT3n0mb63j4AT9BBDeE6QdPeUpNL/CHKPfqNfDSUGmhgV7V+4D9JnLwx9dZTqXFxHZpmYeoVOX0lxak5aenYhpZpzfGcVaoFQ2+z5j8R39rD1m3juIrRQn7x0Ud/XwE43Nc3OpOpPfzM64T7XH9MvkbOI4ytXIzqyVBYM6bMltyPxDS2+mnS24/DsWiB6VRnRgCuUnUEXB3nFWnp3/55iTUwzI2ppNYflYZh75pvzxxt2wRicbbtpmH86Kf+Qld8XfR8Mh/KCp/oYT0msoIIYWE5rFcNVmugLX6SciTblf4jDH5qbr+V9P6lJ94fDfwf43H5lDfQj6Tpx8OsVGRLHnfnKtfgVR1IFBDl5mwPrJzxa41SRaB+Sqg8Qyn/AIkSb4YsdGQ6aZaia+V7+00uGfAa1lDNmUHfITceF9Jg8V+G3o1GQM9gSEZgNQOtomeNui431ZGDqAElTp1U/tKdRTbRgD05yqMHiEsVqAeZH0kTjcUu5LW6kMP6puaZ7WagYAE84J3ubDpK9Xi7k/8AkRWt1W3utoNeIU+aEflcj/leUFq1rDUSo2JXmsIz0m+848QrftAnDodqi/8A0GH0vHZ0b7VOkUX8IfxJ/uP7RRupqKivbwlrD4pl2OnMHUekrmnpca/5ziXXukVbr1A5upyN0Py+vKCzuh1uDyI2Pnzg766w1Nyug1HQ6j0hVVnN7g2POWqWJOxF/Yyq28IiXiDRp1Oh8jvDo45jWZysQLGxHQ/odxCo45NbufUeTcvOBqYfH1U+V7jo2v1lr/UVfSrTHpce+omLnK/MCt+e6nwYQ4r3tf8AtIq3xVKKpen8zEDc6XGtwdtB7znnW1l5nU93QTUx7hQDfMeXQaj1mUD2j4TMaqBP6+wgqckD+sHylZO282MFSzI1hqq3FuZBuBMebHDHYKxW/LaZyXG6SXi1M2JzA+EhW43+BT4tt6CZOITK7DoTBy8YvOi167OczG5/zQdIONFNMJAzr/hDilbDU3daDOjsLsFYjsC1rjbUmceBPZuDcPrUkWnZVRQMo5+ffG0rOw/xxh30dWXqBZv2lqnxXDNqjrc8j2T76TRxvDkZT9oiPbcMgPoTOdxHw/g31CvSJ/AxH9LXHtM2431Jt0uFchbo5a/eGA8xAY5nCkKxUnczia/A3RyKNdjbbMpH9Sn9JCpxHH0dHu47+2P6hcSTHH5W7lXpPBOI/Y0srFnPI98y+OcQSowZRogOa/Mne84/CfGbIRnprp+Zfa9vaXX+J6Fa4fMtzc2AYeuh9pL+d2vIHHYtayqEKrYa+MwMchGmbTuM0cVhqb6Unp2P4jkPuAI78IsqhiGXcstz5ZtpuSYs7tYqYS+t7+BibCXNtB4maFZ3S6rT7H3ddbeMynIucwYGbmmbtCvhSvIHwg0oX7vOWGCcifOO6U7anXuMahuhfwn88eVmA6xRuL2lTe3cRDAK3cfY/tK2W2jQqj0gJ7roR+0SWOxse/b1hEfSxFx7jwjNR0uuo9xIK7mWMIxA085VtLFAH7vmIVdSmrc8p7/l/tBYimy7jTqNQfOTV15kA9IVKpHynQ7jceYgVaFVgeybX5cj4g6GXadMMCbFGH4PlbqCp28vSQFOm38jeq+nKSf7ZRewy/iUgg+fLzkoBxE/Lp/bu+kzgdSf80l3GPmO97Aa+Op/zulJyALDnvMxuonn4frBSRaRErKQ3E6HgVXKTa+oHtOfG4m1w6wcXuNNx7TOXjWPqjxsA1WYDRretgD56TOnQ1ks7DfXoNfIaekkMBSfdAPC4+kvLRx345yPOi/0mlzDf7jD0uE0dwoP5iT7XjlE41lcBo3qK7C6IwYjkSDcLPYOA8dpYhspXK+9jzHUTgKbIhCkaDktlHhtOs4LxfB0/lQoSNW+f339pfWco63FILTLfAoRtcjmYdOJ0nGZXUjx+o3EMCG1BElkrPjKGDIJOnhaSNAW7QE0nv1FpVq1B1ExcWpkDjOH0WptlpqWKkEkCc3ifhzDCkM1MBrbjQ+onRnFAKZQr1MwHdMyXe27lNONPw0rXNN2Xx1Hvr7ynU4PiKZujgnxKmdezhSbSliFYm6kec6y1i6cvUxWJX50LAdQH99SIE8SRtHQeRIPvce06I0y2pI8BKWKwituNPC83thjN9kx0JHiAfcH9IjhVOzIfO3/ACtHrYBeR9JTaiR8pPnL00s/wB/C0UqZHijpO2n/AAqMLEgW2O5lJ6mU5QBpzvcGRVyImOa/6mFIte+3hziD9JWdSpv7xw9+4/X9pAocaAXBHMGAYw+HrECxGZTyP6dIU9gdx5/uOcNSbL+hG0IaAZbprb7p+YeHWVFrgdQf83lRcRge76f2hUqMp0PlyP6GUftUf+VuuwP7SZcpYcu/9JKSnxYBubWJttt3zOYTSrMGXSZ8z436FHQX0hXpm+g9Os0sBhGVS4AYgA25jrp1/vCM+jSJYfrsNbb/AObS6901JFuVj00O2/OGS5U7L1/vMnEVbm3IQbEGOYOW3B0t3Dbzmzg8Qri6nXmOYnNx0cg3BIPUSXHbWOVjrc/WC3NgdOcx6XFGGji/eNDCHiINwoNzprbTviY1blCfFvnZlYgEnwtsNPCFTiR+8oPeLAyiYxm3Nt0eIppYle46/tNDC8Zq0zdXJXodvf8AScoVjo7DYkSaHomG+KbizjzU6+hlteIU32cAj8Wnvt7zzVMWdmF/GW6WN/C5XzMnFOnoFRm0Ba4O2XaEdwqZifWcPQxrrqr362Op9N5bXjtxkcZlO4On0jiabWKqXF8vnKNcsbDryip8WoMoS5Qf5peWGxCEAqAbbA9InXqVXpAIdd5XxNLNezWPdC4lmvcWII2UStiGHI8tucqMrEUXUneVGtfUm81K1Q5dTtsecptT0HO4N/GVoLP3GKEC+MUCkWHeY+boI8UocAnfaBqU7ajaKKAOXaWH213G0UUQp1up0O0OuR/nGvJhv5jnFFKK+Ow+TRvUc/KVzU0HMDlyjxSCaJmByk+B3HnsYegltbA3Fte+KKRJU1XLtteEp1OYJBHMaGKKGlbiOMJGQ2JvctbXwmYYooQ0UUUilNn4XbDLVzYn5MpC9ksMxIAuBra1+XONFA7vFfBGHrDNRZqZYXFu0hv1VtR5ETkuNfC2IwwzsFZPxIwt3XVrMPK8UUiMS8lfziimlLKDItTiigMLjYyQrtziigESuCeY95aznlbTnsfURRTSUSlxOoh0c+B1H7yweJ31db96/wB4opNQV/4q7G2x2/aNUYE6jWKKA2nUxRRQy//Z" />
          </div>
          <p className="ProjectParagraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy
          </p>
          <button className="ProjectButton">See Project</button>
          <a className="ProjectLink">Open-code</a>
        </div>
        <div className="ProjectCards" style={{ flex: 1 }}>
          <h3 className="ProjectHeading">Portfolio Website</h3>
          <a className="UsedSkills React">React.js</a>{" "}
          <a className="UsedSkills JS">JavaScript</a>{" "}
          <a className="UsedSkills HTML">HTML</a>{" "}
          <a className="UsedSkills CSS">CSS</a>{" "}
          <div className="ProjectImg">
            <img src="data:image/jpeg;base64,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" />
          </div>
          <p className="ProjectParagraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy
          </p>
          <button className="ProjectButton">See Project</button>
          <a className="ProjectLink">Open-code</a>
        </div>
      </div>
    </div>
  );
}
