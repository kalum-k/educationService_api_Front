import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import Swal from 'sweetalert2';



const Header = () => {
    const session = {
      id_stu: localStorage.getItem('id_stu'),
      fname_stu: localStorage.getItem('fname_stu'),
      lname_stu: localStorage.getItem('lname_stu'),
    }

    const [ses, setSes] = useState(session);
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem('id_stu');
        localStorage.removeItem('fname_stu');
        localStorage.removeItem('lname_stu');
        Swal.fire(

          'ออกจากระบบเสร็จสิ้น',
          ' ',
          'success',
          window.location.assign("/")
      )
      window.location.assign("/")

    }
    const toggle = () => setIsOpen(!isOpen);
    if (session.id_stu === null) {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-light sticky-top shadow-box-example " color="white" light expand="md" style={{ maxWidth: "auto" }}>
                    <Container className="container-fluid TZS-Container" style={{ maxWidth: "1700px" }}>
                        <NavbarBrand href="/" style={{ color: "#f8813a" }}>
                            ระบบการให้บริการสารสนเทศการเข้าศึกษาต่อ
                    </NavbarBrand>
                        < NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav className="mr-auto" navbar>

                                <NavItem >
                                    <NavLink href="/" > ติอต่อ </NavLink>
                                </NavItem>
                            </Nav >
                            <NavLink>
                                <Button href="/login" outline color="primary" className="Button-Style">เข้าสู่ระบบ</Button>
                            </NavLink>

                        </ Collapse >
                    </Container>
                </ Navbar>
            </div >
        );
    } else {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-light sticky-top shadow-box-example " color="white" light expand="md" style={{ maxWidth: "auto" }}>
                    <Container className="container-fluid TZS-Container" style={{ maxWidth: "1700px" }}>
                        <NavbarBrand href="/" style={{ color: "#f8813a" }}>
                        ระบบการให้บริการสารสนเทศการเข้าศึกษาต่อ
                    </NavbarBrand>
                        < NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav className="mr-auto" navbar>

                                <NavItem >
                                    <NavLink href="/" >  </NavLink>
                                </NavItem>
                            </Nav >
                            <NavLink >
                                {session.fname_stu}{" "}{session.lname_stu}
                            </NavLink>
                            <Nav className="mr-auto" navbar>

<NavItem >
    <NavLink href={"/profile/" + session.id_stu} > ข้อมูลส่วนตัว </NavLink>
</NavItem>
</Nav >
<Nav className="mr-auto" navbar>

<NavItem >
    <NavLink href={"/DetailEducationStudent/" + session.id_stu} > ข้อมูลการศึกษาต่อ </NavLink>
</NavItem>
</Nav >
                            <NavLink >
                                <Button onClick={logout} outline color="danger" className="Button-Style">ออกจากระบบ</Button>
                            </NavLink>

                        </ Collapse >
                    </Container>
                </ Navbar><br />
            </div >
        );
    }
}


export default Header;