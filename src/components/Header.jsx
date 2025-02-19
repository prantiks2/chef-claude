import chef_claude_icon from '../assets/images/chef-claude-icon.svg';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={chef_claude_icon} alt="chef-claude-icon" />
                <h1 class="title">Chef Claude</h1>
            </nav>
        </header>
    );
}